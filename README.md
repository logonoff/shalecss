# shalecss

flat-skeuomorph css components

## Building

To build the css file, run the following command:

```bash
npm ci
npm run build
```

The css file will be output to `workspaces/core/dist/shale.css`.

## Development

To start a development server with hot reloading, run the following command:

```bash
npm ci
npm run dev
```

This will run a next.js development server at `http://localhost:3000`, as well
as a watch process to rebuild any css files or React components. Documentation
is written in the TSdoc of each component directly in the React workspace.

## Usage

Include the following files in your project:

- `build/shale.css`
- `build/shale.css.map` (optional)
- `build/icons.svg`
- `shalecss.js` (optional if you don't want theme switching)
