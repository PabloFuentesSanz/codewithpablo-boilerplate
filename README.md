# CodeWithPablo Boilerplate 🚀

A minimal and professional **React + TypeScript + Vite** boilerplate, pre-configured with:

- **ESLint** and **Prettier** for linting and formatting.
- **Vitest** and **Testing Library** for unit testing.
- **Husky** and **Commitlint** to enforce clean commit messages.
- **Useful scripts** to maintain code quality.

---

## 📦 Installation

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
