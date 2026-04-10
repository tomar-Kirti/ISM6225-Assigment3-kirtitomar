# The Reading Room

Static multi-page site for a book club: catalog with cover tiles, Chart.js insights, CRUD demo pages, Botpress chat, and an About section with data model and GitHub link.

**Author:** Kirti Tomar  
**Repository:** [github.com/tomar-Kirti/ISM6225-Assigment3-kirtitomar](https://github.com/tomar-Kirti/ISM6225-Assigment3-kirtitomar)

## Tech stack

- HTML5, CSS3, JavaScript (no build step)
- [Bootstrap 5](https://getbootstrap.com/) (CDN)
- [Chart.js](https://www.chartjs.org/) (CDN) on the visualizations page
- [Botpress](https://botpress.com/) webchat (CDN) on all pages
- Fonts: Merriweather, Inter (Google Fonts)

## Project structure

| Path | Description |
|------|-------------|
| `index.html` | Home: hero, cover “shelf,” links to catalog and insights |
| `books.html` | Catalog: tiles rendered from `books-data.js` |
| `visualizations.html` | Bar, pie, and line charts |
| `about.html` | Team, ER diagram image, GitHub, tech stack |
| `mybot.html` | Chatbot page + embed |
| `crud-create.html` / `crud-update.html` / `crud-delete.html` | Static CRUD demos (alerts) |
| `books-data.js` | Book records + local cover paths under `images/covers/` |
| `books-catalog.js` | Builds the catalog grid |
| `home-shelf.js` | First six covers on the home page |
| `styles.css` | Theme (cream / brown / gold) |
| `images/er-diagram.svg` | Data model diagram for About |
| `images/covers/*.jpg` | Vendored cover images (served with the site) |
| `scripts/download-covers.ps1` | Optional: re-download covers from Open Library |

## Running locally

This is plain static HTML. Open `index.html` in a browser, or use any static server from the project root, for example:

```bash
npx --yes serve .
```

or in Python:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080` (or the port your tool prints).

Using a local server avoids issues with `file://` and ensures relative paths like `images/covers/...` and scripts load correctly.

## Data

- Catalog content lives in `books-data.js` (including `slug` and `coverUrl` pointing at `images/covers/{slug}.jpg`).
- To refresh cover JPEGs after changing ISBNs in the data file, run `scripts/download-covers.ps1` from PowerShell (see comments in that script).

## License / course use

Course project (ISM 6225). Use per your instructor’s requirements.
