import type { IFile } from "../interfaces";

import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [],
    },

    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `interface IProps {
  title: string;
}

const Button = ({ title }: IProps) => {
  return (
    <button>{title}</button>
  );
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Header.tsx",
              isFolder: false,
              content: `const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;`,
            },
          ],
        },

        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Home />
    </main>
  );
}

export default App;`,
        },
        {
          id: uuid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    },
    {
      id: uuid(),
      name: ".gitignore",
      isFolder: false,
      content: `node_modules
dist
.env
.env.local`,
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "typescript": "~5.7.0",
    "vite": "^6.0.0"
  }
}`,
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content: `# My React App

A simple React application built with TypeScript.

## Getting Started

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build project:
   npm run build
`,
    },
  ],
};
