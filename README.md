# VS Code Clone

A VS Code-inspired code editor interface built with React and TypeScript. This project recreates some of the core features of Visual Studio Code, including an interactive file explorer, multiple opened tabs, and a code editor interface.

## 🚀 Live Demo

[View Live Demo](https://vscode-clone-gray.vercel.app)

## 📸 About The Project

VS Code Clone is a frontend project inspired by Visual Studio Code. It allows users to explore a file and folder structure, open files, switch between tabs, and view file contents through an interactive editor interface.

## ✨ Features

- Interactive file and folder explorer.
- Recursive rendering of nested folders and files.
- Expand and collapse folders.
- Open files by clicking on them.
- Manage multiple opened file tabs.
- Switch between active tabs.
- Close opened file tabs.
- Display file icons based on file extensions.
- Syntax highlighting for code files.
- Resizable editor and sidebar panels.
- Welcome screen when no file is selected.

## 🛠️ Technologies Used

- **React.js** – Building reusable UI components.
- **TypeScript** – Type safety and maintainable code.
- **Redux Toolkit** – Managing global application state.
- **React Redux** – Connecting React components with Redux.
- **Vite** – Development server and production build tool.
- **Tailwind CSS** – Styling the user interface.
- **React Icons** – Providing UI icons.
- **Syntax Highlighting** – Displaying code with syntax highlighting.

## 🧠 State Management

Redux Toolkit is used to manage the application's global state.

The `TreeSlice` manages:

- `openedFile`: Stores the list of opened files.
- `clickedFile`: Stores the currently selected file and its content.
- `activeTab`: Tracks the currently active tab.

## 📂 Project Structure

```text
src/
├── components/
│   ├── OpenedFileBar/
│   ├── RecursiveComponent/
│   ├── RenderFileIcon/
│   ├── ResizablePanel/
│   ├── WelcomeTab/
│   └── ...
│
├── constants/
├── data/
├── interfaces/
├── redux/
│   ├── feature/
│   │   └── TreeSlice.ts
│   └── store.ts
│
├── utils/
├── App.tsx
└── main.tsx
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/mo7amedahmed1214/vscode-clone.git
```

### 2. Navigate to the project directory

```bash
cd vscode-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🏗️ Build for Production

To create a production build, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The project is deployed on Vercel.

Live URL: https://vscode-clone-gray.vercel.app
