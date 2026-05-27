# Hearthlight Website

Static GitHub Pages launch site for Hearthlight.

## Structure

- `site/index.html`: homepage
- `site/quick-start/index.html`: quick-start page
- `site/model-library/index.html`: Model Library page
- `site/trigger-library/index.html`: Trigger Library page
- `site/connector-library/index.html`: Connector Library page
- `site/styles.css`: shared styling
- `site/main.js`: shared interaction logic

## Publishing

This repository publishes `site/` through GitHub Pages using the workflow at
`.github/workflows/deploy.yml`.

Default project URL:

- `https://lauretta-io.github.io/hearthlight_web/`

Because this is a project site, it can later be mapped to a custom domain through GitHub Pages
settings without changing the site structure.

## Local Preview

From the repository root:

```bash
python3 -m http.server 4173 -d site
```
