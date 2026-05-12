# Docs Hub

Docs Hub is built for teams that want documentation to feel more like a polished product interface than a plain blog or static wiki.

| Area | Provided by Docs Hub |
| --- | --- |
| Layout | Sidebar, topbar, article shell, footer |
| Navigation | Primary sidebar tree and section-aware navigation |
| Reading UI | Spacious content card and right-side table of contents |
| Content patterns | Tabs, admonitions, expandable details, code blocks |
| Styling | Headings, tables, blockquotes, lists, inline code |

## Theme regions

### Sidebar

The left rail is the main navigation surface

### Topbar

The topbar contains the documentation context and a compact search field

### Article shell

The main content area is intentionally roomy so long-form technical writing stays readable

```python
print("Docs Hub is ready")
```

## Included content patterns

Docs Hub supports several common documentation patterns out of the box.

### Admonitions

!!! note "Note"
    Use notes for supporting information.

!!! info "Info"
    Use info blocks for neutral reference details.

!!! success "Success"
    Use success blocks for completed setup steps.

!!! warning "Warning"
    Use warnings before risky operations.

!!! danger "Danger"
    Use danger blocks for destructive or irreversible actions.

### Expandable details

??? note "Show additional details"
    Use expandable sections when content is useful but not essential for everyone.

???+ info "Expanded by default"
    Use this style when the section should start open.

### Tabs

=== "Linux"

    ```bash
    # linux
    pip install mkdocs
    mkdocs serve
    ```

=== "Windows"

    ```powershell
    # windows
    pip install mkdocs
    mkdocs serve
    ```

=== "macOS"

    ```bash
    # macos
    pip install mkdocs
    mkdocs serve
    ```