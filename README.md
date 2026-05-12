# Quick start

This guide shows how to install Docs Hub and run a local MkDocs project with the theme enabled.

## Install dependencies

```bash
pip install mkdocs pymdown-extensions
```

If the theme is published as a package, install it as well:

```bash
pip install mkdocs-docs-hub
```

## Create a project

Create a new MkDocs project:

```bash
mkdocs new my-docs
cd my-docs
```

## Configure `mkdocs.yml`

Use Docs Hub as the active theme:

```yaml
site_name: My Docs
site_description: Example project using Docs Hub

theme:
  name: docs-hub

plugins:
  - search:
      min_search_length: 2

markdown_extensions:
  - admonition
  - attr_list
  - md_in_html
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
```

## Add some pages

A minimal project might look like this:

```text
docs/
  index.md
  guides/
    quick-start.md
  reference/
    theme-anatomy.md
    styling-tokens.md
```

## Run locally

```bash
mkdocs serve
```

Then open the local development URL in your browser.

## Recommended workflow

1. Start with a small navigation tree
2. Add a components page for testing UI patterns
3. Verify search, tabs, admonitions, and code blocks
4. Build once before publishing

## Example callout

!!! tip "Recommendation"
    Keep a dedicated `components.md` page in your project while developing the theme.