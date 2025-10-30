# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

  # Frontend (React + Vite)

  This folder contains the frontend app built with Vite, React and TypeScript. TailwindCSS is used for styling.

  Prerequisites
  - Node.js (>=16 recommended)
  - npm (or use yarn/pnpm)

  Setup & Run (PowerShell)

  ```powershell
  cd frontend
  npm install
  npm run dev
  ```

  Environment
  - Create `frontend/.env` with:
    - `VITE_API_URL=http://localhost:8000`

  Tailwind troubleshooting
  - Ensure `src/index.css` includes the Tailwind directives at the top:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  - If Tailwind classes are unstyled, check these common causes:
    1. `postcss.config.js` must be loadable by Vite. Since this project uses ESM (`package.json` contains "type": "module"), `postcss.config.js` should use ESM (`export default { plugins: { tailwindcss: {}, autoprefixer: {} } }`) or be named `postcss.config.cjs` for CommonJS.
    2. `tailwind.config.js` must exist and include `content` paths, for example:
       ```js
       module.exports = {
         content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
         theme: { extend: {} },
         plugins: [],
       }
       ```
    3. Confirm `src/main.tsx` imports `./index.css` (this repo does).
    4. If Vite shows a PostCSS error about ESM/CommonJS, fix `postcss.config.js` to match `package.json` type or rename to `.cjs`.

  Cleaning up & rebuild

  ```powershell
  # remove vite cache and reinstall if problems persist
  Remove-Item -Recurse -Force node_modules .vite
  npm install
  npm run dev
  ```

  Notes
  - The project uses a Vite fork (see `package.json` overrides). If you see unusual behavior from the dev server, try using the official `vite` package.
  - The frontend expects the backend at `VITE_API_URL` (default above).
