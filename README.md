# shalecss

flat-skeuomorph css components

## Want to read more mes?

This project is made up of two main packages:

- [core](workspaces/core/README.md) - core CSS styles
- [react](workspaces/react/README.md) - a thin React wrapper over said CSS styles

## Development

### Start a development server

To start a development server with hot reloading, run the following command:

```bash
npm ci
npm run dev
```

This will run a next.js development server at `http://localhost:3000`, as well
as a watch process to rebuild any css files or React components. Documentation
is written in the TSdoc of each component directly in the React workspace.

### Building

To build the css file, run the following command:

```bash
npm ci
npm run build
```

The css file will be output to `workspaces/core/dist/shale.css`.

### Releasing a new version

1. Edit the version in `package.json` files in the root workspace with the desired version.
2. Run the following:

```
npm run version
git tag x.y.z
git push origin x.y.z
```

3. The GitHub action hopefully does the rest
