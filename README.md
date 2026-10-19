# GenFolio

GenFolio is a browser-based portfolio studio for creating and exporting a personal portfolio. Edit your profile, experience, projects, and skills; choose a visual theme and layout; then export the preview as a standalone HTML file.

## Features

- Edit portfolio content and arrange the sections shown in the preview.
- Choose from three templates and customize colors and avatar shape.
- Preview the portfolio in desktop and mobile layouts.
- Save changes in the current browser using `localStorage`.
- Export the current portfolio as a standalone `.html` file.
- Restore the sample portfolio with **Reset**.

## Requirements

- Node.js 20 or newer
- npm (included with Node.js)

## Getting started

Install the project dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your browser. Changes to the source files are reflected while the development server is running.

## Available commands

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start the Vite development server.                                 |
| `npm run build`   | Run the TypeScript check and create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally; run `npm run build` first.     |

## Using the editor

1. Update the content in the **Content** tab.
2. Adjust colors and avatar styling in **Style**.
3. Choose a template, arrange sections, and inspect the responsive preview in **Layout**.
4. Select **Export portfolio** to download a standalone HTML file.

The editor stores its working data in browser `localStorage`, under the key `genfolio-portfolio-v1`. That data is specific to the browser and origin where the app is running. Exported HTML is a separate file and can be opened directly in a browser or hosted as a static page.

## Project structure

```text
index.html       Vite HTML entry point
src/
  main.ts        Editor state, UI, preview, and export behavior
  style.ts       Styles embedded in exported portfolio HTML
  styles.css     GenFolio editor styles
```

## Tech stack

- TypeScript
- Vite
- HTML and CSS
