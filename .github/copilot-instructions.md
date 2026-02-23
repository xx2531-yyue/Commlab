# Copilot Instructions for Commlab

## Project Overview
Commlab is a collection of creative static HTML projects and interactive tutorials exploring playful decision-making, storytelling, and visual design. Each subdirectory contains a self-contained website with HTML pages, CSS styling, and ASCII art/image assets.

**Key subdirectories:**
- **tutorial/**: Interactive fate/destiny decision system with ASCII art and multi-page narrative flow
- **Cynthia-reci3/**: Mood-based interactive experience (clothes, glasses, playlists, moods)
- **my-first-website/**: Personal portfolio with embedded media links
- **WebBoxes/, 111/**: Additional demo projects

## Architecture & Patterns

### HTML Structure Conventions
- **Inline CSS only**: All styling is embedded in HTML via `style=""` attributes (no external stylesheets)
- **Color palette**: Heavy use of pastel backgrounds (`lemonchiffon`, `deeppink`, `lightpink`, `rgb(255, 194, 194)`)
- **Typography**: Mix of system fonts (`'Segoe UI'`, Georgia) with decorative fallbacks; `<pre>` tags for ASCII art
- **Viewport meta tag**: Always included for mobile responsiveness (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)

### Navigation Patterns
- Simple anchor links between pages in same directory: `<a href="index.html">`, `<a href="page2.html">`
- External links preserved: Bilibili profiles, Fandom links, etc.
- Interactive image links: `<a href="Page.html"><img src="images/..."></a>` triggers page transitions

### Key Files
- [tutorial/index.html](tutorial/index.html): Landing page with ASCII art intro
- [tutorial/Happy1.html](tutorial/Happy1.html): Multi-step interactive guide (4-step decision system using time + battery percentage + menu counting)
- [tutorial/Happy2.html](tutorial/Happy2.html): Related content (referenced but alternate path)
- [tutorial/Mood.html](tutorial/Mood.html): Mood selection linked from Happy1 decision flow
- [Cynthia-reci3/index.html](Cynthia-reci3/index.html): Winter-themed intro with mood visualization
- [Cynthia-reci3/playlist.html](Cynthia-reci3/playlist.html): Playlist presentation

## Content & Data Flows

### tutorial/ Decision System
The core interaction (Happy1.html) implements a **pseudo-randomized decision engine**:
1. **Input**: Current phone time (minute value) → starting number
2. **First calculation**: Divide by 7 (quotient determines category, remainder needed later)
3. **Category selection**: Count down to quotient position in a menu (with wraparound if needed)
4. **Second calculation**: Use remainder to select item within category
5. **Final fate**: Check phone battery percentage (even/odd) to decide if user keeps selection or counts down 3 more items

**No actual backend/database**: All logic is instructional (user performs calculations manually).

### Visual Design
- Heavy use of ASCII art in `<pre>` blocks for decoration (boba cups, winter scenes, character art)
- Image folder structure: `images/IMG_XXXX.png` referenced from HTML
- Responsive layout: Text-align utilities, flexbox-less (pure inline styles)
- No JavaScript: Pure HTML/CSS navigation flow

## Development Workflows

### Local Viewing
Open any `index.html` directly in a browser (no server required for static content). For image assets to load, either:
- Open through a local web server: `python -m http.server 8000` in project root
- Or use VS Code's Live Server extension

### File Organization
```
/project-name/
  ├── index.html          # Landing/home page
  ├── page2.html, Happy1.html, etc.  # Content pages
  ├── images/             # PNG assets (IMG_XXXX.png naming)
  └── [optional] playlist.html
```

### Common Edits
- **Color updates**: Search `style="color:` or `background-color:` in HTML
- **Typography**: Modify `font-family:` in `<h1>`, `<h3>`, `<h4>`, `<pre>` tags
- **Link updates**: Verify `href=""` paths (relative to current file's directory)
- **ASCII art**: Maintain `<pre>` tag wrapping; preserve whitespace/monospace formatting
- **Image references**: Update `src="images/..."` paths if images moved; test that `images/` folder exists in same directory

## Editor Configuration
- **Language**: HTML5 (no build steps, no dependencies)
- **Lint**: Standard HTML practices (proper nesting, meta charset, viewport tag)
- **Testing**: Manual browser testing for link navigation and image loading
- **Git**: Check `.gitattributes` for line ending conventions

## Conventions to Follow

1. **Preserve inline CSS approach**: Don't refactor to external stylesheets unless requested
2. **Keep pastel/whimsical aesthetic**: Color choices and ASCII art are intentional; maintain tone
3. **Maintain navigation integrity**: Test all `<a href="">` links work after edits
4. **Image paths**: Relative paths only; use `images/` subdirectory
5. **HTML validity**: Ensure `<!DOCTYPE html>` and proper meta tags present
6. **No external dependencies**: All content self-contained (except external profile links like Bilibili)

## Quick Command Reference
- **View project locally**: `python -m http.server 8000` → visit `http://localhost:8000/project-folder`
- **Search for styling**: `grep -r 'style="' .` to find all inline CSS
- **Verify links**: Manual click-through or use `grep -o 'href="[^"]*"' *.html` to extract all links
