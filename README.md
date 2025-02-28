# CodeWithPablo Boilerplate 🚀

[![npm version](https://img.shields.io/npm/v/create-codewithpablo.svg)](https://www.npmjs.com/package/create-codewithpablo)

A minimal and professional **React + TypeScript + Vite** boilerplate, pre-configured with:

- **ESLint** and **Prettier** for linting and formatting.
- **Vitest** and **Testing Library** for unit testing.
- **Husky** and **Commitlint** to enforce clean commit messages.
- **Useful scripts** to maintain code quality.

---

## 📦 Installation

### 🚀 Option 1: Using NPM (Recommended)

```sh
npm create codewithpablo my-new-project
```

### 🔹 Option 2: Using NPX

```sh
npx create-codewithpablo my-new-project
```

### 🔹 Option 3: Cloning the Repository (For Full Customization)

```sh
git clone https://github.com/your-username/codewithpablo-boilerplate.git
cd codewithpablo-boilerplate
npm install
```

After installing dependencies, run the following command to ensure Husky hooks have execution permissions:

### 🔧 Post-Installation

This boilerplate includes a postinstall script that ensures Husky hooks have execution permissions automatically.

```sh
npm postinstall
```

However, if you encounter issues, you can run the following command manually:

```sh
chmod +x .husky/*
```

## 🚀 Usage

### 🔥 Development Mode

```sh
npm run dev
```

Open http://localhost:5173 in your browser.

### 🔧 Linting & Formatting

```sh
npm run lint       # Check ESLint errors
npm run format     # Apply Prettier formatting
npm run check      # Run linting, formatting, and type-check in one command
```

### ✅ Testing

```sh
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Generate test coverage report
```

### 🔄 Commit Convention

This project follows the Conventional Commits standard.
Commit messages should use the following format:

```sh
<type>(<optional scope>): <short message>
```

Common commit types:
`feat`: New feature.

`fix`: Bug fix.

`chore`: Maintenance or minor changes.

`docs`: Documentation updates.

`test`: Adding or modifying tests.

`ci`: Changes to CI/CD configuration.

Examples:

```sh
git commit -m "feat(auth): add login functionality"
git commit -m "fix(button): correct padding issue"
git commit -m "chore(lint): configure ESLint and Prettier"
```

### 🛠 Husky & Git Hooks

This boilerplate uses Husky to automate checks before commits and pushes.

`pre-commit`: Runs linting and type-check before committing.

`commit-msg`: Enforces Conventional Commits format.

`pre-push`: Runs tests before pushing.

If any check fails, the commit or push will be blocked.

---

## 📂 Project Structure

This boilerplate follows a well-organized folder structure for scalability and maintainability:

```sh
codewithpablo-boilerplate/
│── src/
│   ├── assets/          # Static assets (images, fonts, icons, etc.)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layouts (e.g., header, sidebar)
│   ├── pages/           # Page-level components (e.g., Home, About)
│   ├── services/        # API calls and external services
│   ├── store/           # Global state management (if needed)
│   ├── utils/           # Utility functions/helpers
│   ├── styles/          # Global styles
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   ├── router.tsx       # React Router configuration (if used)
│   ├── setupTests.ts    # Vitest setup file
│── __tests__/           # Unit tests
│── public/              # Static files (index.html, favicon, etc.)
│── .husky/              # Husky hooks
│── .eslint.config.js        # ESLint config
│── .prettierrc.json          # Prettier config
│── tsconfig.json        # TypeScript config
│── vite.config.ts       # Vite config
│── README.md            # Documentation
│── package.json         # Dependencies and scripts
│── node_modules/        # Dependencies (ignored in Git)
│── ...                  #
```

## 🔗 Aliases for Importing

This boilerplate supports **path aliases** for cleaner imports. Instead of writing:

```ts
import Home from '../../../pages/Home'
```

You can use the alias @ to import from src/:

```ts
import Home from '@/pages/Home'
```

Aliases are defined in both:

- vite.config.ts → for Vite and the app runtime.
- vite.config.ts (test section) → for Vitest compatibility.
- tsconfig.json → for TypeScript support.

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.
