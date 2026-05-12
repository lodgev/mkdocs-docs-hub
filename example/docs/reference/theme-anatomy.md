# Theme anatomy

This page explains the main building blocks of Docs Hub.

## Layout structure

Docs Hub is organized around three main regions:

- sidebar
- topbar
- content shell

## Sidebar

The sidebar is the primary navigation surface.

It is best suited for top-level sections such as:

- Home
- Getting started
- Reference
- Components
- FAQ

## Topbar

The topbar provides quick orientation and search.

It should stay compact and avoid noisy controls.

## Main article area

The article area is the core reading surface.

It includes:

- page title and section context
- article content
- typography styles
- code blocks
- tables
- admonitions

## Right rail

The right rail is used for the page table of contents.

It is especially useful for long articles with multiple headings.

## Templates

A typical theme package includes these templates:

- `base.html`
- `main.html`
- `404.html`
- `partials/sidebar.html`
- `partials/topbar.html`
- `partials/toc.html`

## Assets

The main asset files are:

- `assets/css/theme.css`
- `assets/js/theme.js`

## Example note

!!! note "Implementation detail"
    Keep your template structure simple and avoid duplicate template roots before publishing the package.