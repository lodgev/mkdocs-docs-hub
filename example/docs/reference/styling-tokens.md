# Styling tokens

Docs Hub uses CSS custom properties for layout, color, and surface styling.

## Core tokens

```css
:root {
  --dh-bg: #eef1f7;
  --dh-surface: #f9f9f9;
  --dh-surface-soft: #ffffff;
  --dh-border: #d7deea;
  --dh-text: #342e37;
  --dh-text-soft: #66728d;
  --dh-primary: #3c91e6;
  --dh-primary-strong: #3550b5;
}
```

## Layout tokens

```css
:root {
  --dh-sidebar-width: 220px;
  --dh-rightbar-width: 320px;
  --dh-radius-xl: 28px;
  --dh-radius-lg: 22px;
  --dh-radius-md: 16px;
}
```

## How to customize

You can change the overall feel of the theme by adjusting:

- background tone
- surface colors
- border contrast
- accent color
- radii
- sidebar width

## Example override

```css
:root {
  --dh-primary: #5b7cff;
  --dh-primary-strong: #3c55d6;
  --dh-radius-xl: 24px;
}
```

## Best practices

!!! warning "Keep contrast readable"
    When changing surface and text colors, verify code blocks, tabs, admonitions, and table borders.

??? note "Why tokens matter"
    Tokens make it easier to adapt the theme for different brands without rewriting the whole stylesheet.