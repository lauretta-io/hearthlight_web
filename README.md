# Hearthlight Website

Static GitHub Pages site for Hearthlight.

## Publishing

This repository publishes `site/` through GitHub Pages using the workflow at
`.github/workflows/deploy.yml`.

Expected default project URL after Pages is enabled:

- `https://lauretta-io.github.io/hearthlight_web/`

Because this is a project site, it can later be mapped to a custom domain through GitHub Pages
settings without changing the site structure.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173 -d site
```
