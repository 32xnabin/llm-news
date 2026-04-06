# JavaScript Algorithms & Utilities

A collection of JavaScript algorithms and utility functions, created entirely using **OpenClaw** with **Ollama** (`qwen2.5-coder:3b`) as the code generation model.

## 🤖 How This Repo Was Created

This repository was built using an AI coding workflow:

1. **OpenClaw** — AI agent orchestrator
2. **Ollama** — Local LLM runner (`qwen2.5-coder:3b`)
3. All code was generated via direct `ollama run` commands, then committed and pushed to GitHub

No sub-agents were used — all code generation happened through direct exec calls.

## 📁 Contents

### Sorting Algorithms (3)
- **`bubbleSort.js`** — Bubble Sort with early exit optimization
- **`selectionSort.js`** — Selection Sort algorithm
- **`insertionSort.js`** — Insertion Sort algorithm

### Search Algorithms (3)
- **`binarySearch.js`** — Binary Search (works on sorted arrays)
- **`linearSearch.js`** — Linear Search (works on any array)
- **`interpolationSearch.js`** — Interpolation Search (works on uniformly distributed sorted arrays)

### Utility Functions
- **`stringUtils.js`** — String utilities: `capitalize()`, `reverse()`, `wordCount()`
- **`formatCurrency.js`** — Formats numbers as USD currency (e.g., `1234.56` → `"$1,234.56"`)

### React Component
- **`Login.jsx`** — React login form component with email & password validation (8+ character password requirement)

## 🚀 Usage

Each file is standalone and includes example usage with `console.log`. Run any file with Node.js:

```bash
node bubbleSort.js
node binarySearch.js
node stringUtils.js
```

## 🛠️ Tech Stack

- **JavaScript** (ES6+)
- **React** (Login.jsx)
- **OpenClaw** — AI agent framework
- **Ollama** — Local LLM inference

## 📄 License

Open-source for learning and experimentation.
