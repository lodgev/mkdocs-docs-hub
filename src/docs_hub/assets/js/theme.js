(function () {
  /**
   * DOM references
   * Search UI is optional, so every interaction is guarded.
   */
  const searchForm = document.getElementById("dh-search-form");
  const searchInput = document.getElementById("dh-search-input");
  const searchResults = document.getElementById("dh-search-results");

  /**
   * In-memory search index loaded from JSON.
   * Expected shape:
   * {
   *   docs: [{ title, text, location }, ...]
   * }
   */
  let searchDocs = [];

  /**
   * Load the search index from the global URL configured by the theme/template.
   * Fails silently in UI, but logs a useful error for debugging.
   */
  async function loadSearchIndex() {
    try {
      const response = await fetch(window.DOCS_HUB_SEARCH_INDEX_URL);
      if (!response.ok) return;

      const data = await response.json();
      searchDocs = Array.isArray(data.docs) ? data.docs : [];
    } catch (err) {
      console.error("Failed to load search index:", err);
    }
  }

  /**
   * Escape unsafe HTML before rendering user/content-derived text into markup.
   */
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /**
   * Build a highlighted snippet around the first query match.
   * Falls back to the first ~140 characters if no match is found.
   */
  function makeSnippet(text, query) {
    const normalizedText = text || "";
    const q = query.trim();

    if (!q) return "";

    const lowerText = normalizedText.toLowerCase();
    const lowerQ = q.toLowerCase();
    const matchIndex = lowerText.indexOf(lowerQ);

    if (matchIndex === -1) {
      return `${escapeHtml(normalizedText.slice(0, 140))}…`;
    }

    const start = Math.max(0, matchIndex - 55);
    const end = Math.min(normalizedText.length, matchIndex + q.length + 85);

    let snippet = normalizedText.slice(start, end).trim();

    if (start > 0) snippet = `…${snippet}`;
    if (end < normalizedText.length) snippet = `${snippet}…`;

    const escaped = escapeHtml(snippet);
    const pattern = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");

    return escaped.replace(pattern, "<mark>$1</mark>");
  }

  /**
   * Very lightweight client-side ranking:
   * - title match is weighted highest
   * - content match is medium
   * - location/URL match is a minor signal
   */
  function searchDocsIndex(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    return searchDocs
      .map((doc) => {
        const title = (doc.title || "").toLowerCase();
        const text = (doc.text || "").toLowerCase();
        const location = doc.location || "";

        let score = 0;

        if (title.includes(q)) score += 20;
        if (text.includes(q)) score += 10;
        if (location.toLowerCase().includes(q)) score += 4;

        return { doc, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item) => item.doc);
  }

  /**
   * Render search results dropdown.
   */
  function renderResults(results, query) {
    if (!searchResults) return;

    if (!query.trim()) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }

    if (!results.length) {
      searchResults.hidden = false;
      searchResults.innerHTML = `<div class="dh-search-empty">No results for “${escapeHtml(query)}”</div>`;
      return;
    }

    searchResults.hidden = false;
    searchResults.innerHTML = results
      .map((doc) => {
        const snippet = makeSnippet(doc.text || "", query);
        const url = doc.location || "#";

        return `
          <a class="dh-search-result" href="${url}">
            <span class="dh-search-result-title">${escapeHtml(doc.title || "Untitled")}</span>
            <span class="dh-search-result-url">${escapeHtml(url)}</span>
            <span class="dh-search-result-snippet">${snippet}</span>
          </a>
        `;
      })
      .join("");
  }

  /**
   * Read current input value and update results list.
   */
  function handleSearch() {
    if (!searchInput) return;

    const query = searchInput.value;
    const results = searchDocsIndex(query);
    renderResults(results, query);
  }

  /**
   * Wire search interactions:
   * - live input updates
   * - focus-triggered display
   * - submit without page reload
   * - outside click closes dropdown
   */
  function initSearch() {
    if (searchInput) {
      searchInput.addEventListener("input", handleSearch);
      searchInput.addEventListener("focus", handleSearch);
    }

    if (searchForm) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        handleSearch();
      });
    }

    document.addEventListener("click", function (e) {
      if (!searchForm || !searchResults) return;

      if (!e.target.closest("#dh-search-form") && !e.target.closest("#dh-search-results")) {
        searchResults.hidden = true;
      }
    });

    loadSearchIndex();
  }

  /**
   * Add a copy button to every code block inside article content.
   * This is idempotent: if a button already exists, the block is skipped.
   */
  function initCodeCopyButtons() {
    const blocks = document.querySelectorAll(".dh-article-card pre");

    blocks.forEach((pre) => {
      if (pre.querySelector(".dh-code-copy")) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "dh-code-copy";
      button.textContent = "Copy";

      button.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = code ? code.innerText : pre.innerText;

        try {
          await navigator.clipboard.writeText(text.trim());

          button.textContent = "Copied";
          button.classList.add("is-copied");

          window.setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("is-copied");
          }, 1400);
        } catch (err) {
          button.textContent = "Failed";

          window.setTimeout(() => {
            button.textContent = "Copy";
          }, 1400);
        }
      });

      pre.appendChild(button);
    });
  }

  /**
   * Theme bootstrap
   */
  initSearch();
  initCodeCopyButtons();
})();