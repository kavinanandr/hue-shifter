# 🎨 Hue Shifter

**Hue Shifter** is a simple, interactive React application that allows users to change the background color of the screen with a single click. It provides a collection of predefined colors through an intuitive and responsive interface.

Built to explore React's `useState` Hook, event handling, and dynamic styling with Tailwind CSS.

🌐 **Live Demo:** [Hue Shifter](https://hue-shifter.vercel.app/)

---

## ✨ Features

- **Instant Color Switching:** Change the background color instantly by clicking a color button.
- **Multiple Color Options:** Choose from seven predefined colors:
  - 🔴 Red
  - 🟢 Green
  - 🔵 Blue
  - 🟠 Orange
  - 🩷 Pink
  - 🟣 Purple
  - 💜 Violet
- **Dynamic UI Updates:** Uses React's `useState` Hook to manage and update the selected background color.
- **Responsive Design:** Adapts to different screen sizes using Tailwind CSS responsive utilities.
- **Interactive Buttons:** Includes hover effects for a better user experience.
- **Clean Interface:** Minimal design with clearly distinguishable color selection buttons.

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Building the user interface |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application logic and event handling |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling and responsive design |
| [Vite](https://vite.dev/) | Development server and build tool |
| [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) | Application structure |

### Development Tools
- ESLint – Code quality and linting.
- Vite React Plugin – React integration with Vite.
- npm – Package management.

---

## 🚀 Getting Started

Follow these instructions to set up and run Hue Shifter on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (compatible with Vite 8)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/kavinanandr/hue-shifter.git
```

**2. Navigate to the project directory**

```bash
cd hue-shifter
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

---

## 📂 Project Structure

```text
hue-shifter/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

### File and Directory Descriptions

| File / Directory | Description |
|---|---|
| `public/` | Directory reserved for static public assets. |
| `src/` | Contains the application's source code. |
| `src/assets/` | Stores application assets, including the logo. |
| `src/assets/logo.png` | Logo displayed in the application header. |
| `src/App.jsx` | Main React component containing the UI, color selection buttons, and state management logic. |
| `src/index.css` | Imports Tailwind CSS for application styling. |
| `src/main.jsx` | Entry point of the React application. Mounts the App component using React DOM. |
| `.gitignore` | Specifies files and directories Git should ignore. |
| `eslint.config.js` | Configuration for ESLint code quality checks. |
| `index.html` | HTML entry point for the Vite application. |
| `package.json` | Contains project metadata, dependencies, and npm scripts. |
| `package-lock.json` | Locks dependency versions for consistent installations. |
| `vercel.json` | Vercel deployment configuration. |
| `vite.config.js` | Configuration for Vite and its React and Tailwind CSS plugins. |

---

## ⚙️ Available Scripts

The following scripts are available through npm:

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to identify potential code quality issues. |

### Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the generated build:

```bash
npm run preview
```

The production-ready files will be generated inside the `dist/` directory.

---

## 🧠 Concepts Practiced

This project helped reinforce the following React and frontend development concepts:

- **React Functional Components:** Building reusable UI using functional components.
- **React useState Hook:** Managing component state.
- **Event Handling:** Handling button click events using `onClick`.
- **State-Driven Rendering:** Dynamically updating the interface based on the current state.
- **Dynamic CSS Classes:** Applying Tailwind CSS classes dynamically using JavaScript template literals.
- **Responsive Design:** Using Tailwind CSS responsive modifiers to adapt the interface to different screen sizes.
- **Component-Based Development:** Structuring an application using React components.

---

## 🌐 Deployment

Hue Shifter is deployed using [Vercel](https://vercel.com/).

**Live Application:** [https://hue-shifter.vercel.app/](https://hue-shifter.vercel.app/)

---

## 👨‍💻 Author

**Kavin Anand**

B.Tech Computer Science and Engineering Student | Aspiring Full-Stack Developer

- **GitHub:** [@kavinanandr](https://github.com/kavinanandr)
- **Project Repository:** [hue-shifter](https://github.com/kavinanandr/hue-shifter)
- **Live Project:** [Hue Shifter](https://hue-shifter.vercel.app/)

---

## 📄 License

This project is open-source and available for learning and educational purposes.

---

⭐ If you find this project useful, consider giving the repository a star!