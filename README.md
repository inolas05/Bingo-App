# Bingo-App

A fun game built with **React**, **Vite**, and **Tailwind CSS**. This version includes:
1. A **Reset Button** to start a fresh game.  
2. A **Bingo Count** displaying how many completed lines (rows, columns, diagonals) exist.  
3. **Center Alignment** ensuring the Bingo board and header are fully centered.

---

---

## Features
- **Random Board Generation**: Every new load or reset shuffles the Bingo phrases.
- **FREE SLOT** in the center, already selected.
- **Bingo Detection**: Checks rows, columns, and diagonals for completion.
- **Bingo Won Modal**: Shows an animated overlay once a Bingo is achieved.
- **Bingo Count**: Displays the total number of completed lines.
- **Reset Button**: Clears the board and score, generating a new Bingo card.



---

## Tech Stack
- **React** (v18+)
- **Vite** (for dev server and bundling)
- **Tailwind CSS** (for styling)
- **Framer Motion** (optional; for modal animations)
- **Vitest** + **React Testing Library** (for tests)

---

## Project Structure
project123/
├─ src/
│   ├─ components/
│   │   ├─ BingoCard.jsx
│   │   ├─ BingoCell.jsx
│   │   ├─ BingoWonModal.jsx
│   │   └─ Navbar.jsx
│   ├─ utils/
│   │   └─ Phrases.js
│   ├─ __tests__/
│   │   ├─ BingoCell.test.jsx
│   │   ├─ BingoWonModal.test.jsx
│   │   └─ BingoCard.integration.test.jsx
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ setupTests.js
├─ index.css
├─ vite.config.js
├─ package.json
└─ README.md


---

## Getting Started

### Prerequisites
- **Node.js** (v14+ recommended)
- **npm** or **yarn** as package manager

### Installation
1. **Clone** the repository:
git clone https://github.com/inolas05/Bingo-App.git
2. **Navigate** to the project folder:
cd project123
3. **Install dependencies**:
npm install
*(or `yarn install` if using Yarn.)*

### Run Locally
Start the development server:
npm run dev
Open [http://localhost:5173](http://localhost:5173) in your browser (port may vary).



## Scripts

- **`npm run dev`** – Start local development server (Vite).  
- **`npm run build`** – Build production output.  
<!-- - **`npm run preview`** – Preview the production build.   -->
- **`npm run test`** – Run all tests with Vitest.

---

## Usage

1. **Bingo Board**: After starting the app, you'll see a 5×5 grid of randomly placed phrases.
2. **Center Alignment**: The layout (board and header) is centered both horizontally and vertically.
3. **Marking Cells**: Click on any cell to toggle its selection. FREE SLOT is automatically marked.
4. **Bingo Count**: Shows how many rows, columns, and diagonals are fully selected.
5. **Winning**: Completing a line triggers the Bingo won modal.
6. **Reset Button**: Click **Reset Game** to clear all selections, shuffle new phrases, and reset the count.

---

## Testing

This project uses **Vitest** + **React Testing Library** for both **unit** and **integration tests**.

### Run Tests
npm run test

- By default, Vitest runs in watch mode, re-running tests on file changes.