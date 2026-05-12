# Components

This page is a visual playground for all major content patterns supported by Docs Hub.

## Admonitions

!!! note "Note"
    Notes are useful for secondary information.

!!! info "Info"
    Info blocks are useful for reference material.

!!! success "Success"
    Success blocks are useful for confirming a completed step.

!!! warning "Warning"
    Warnings should appear before risky actions.

!!! danger "Danger"
    Danger blocks are best for destructive operations.

## Expandable details

??? note "Show setup details"
    This content stays hidden until opened.

???+ info "Expanded example"
    This example starts open by default.

## Tabs

=== "Python"

    ```python
    print("Hello from Docs Hub")
    ```

=== "JavaScript"

    ```js
    console.log("Hello from Docs Hub");
    ```

=== "YAML"

    ```yaml
    theme:
      name: docs-hub
    ```

## Code blocks

```bash
pip install mkdocs pymdown-extensions
mkdocs serve
```

## Inline code

Use `mkdocs.yml` to configure the theme and `theme.css` to customize it.

## Table

| Component | Purpose |
| --- | --- |
| Sidebar | Primary navigation |
| Topbar | Search and context |
| TOC | Page-level navigation |

## Blockquote

> Docs Hub is designed to feel like a product documentation interface, not a simple blog layout.

## Lists

- Navigation
- Search
- Content hierarchy
- Reusable patterns

1. Install dependencies
2. Configure MkDocs
3. Run the site
4. Review components