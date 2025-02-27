function Home() {
  return (
    <main className="boilerplate">
      <h1 className="boilerplate__title">
        🚀 Welcome to CodeWithPablo Boilerplate
      </h1>
      <p className="boilerplate__description">
        A minimal and professional{' '}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="boilerplate__link"
        >
          React
        </a>{' '}
        +{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="boilerplate__link"
        >
          TypeScript
        </a>{' '}
        boilerplate, built with best practices to kickstart your next project.
      </p>

      <section className="boilerplate__features">
        <h2 className="boilerplate__features-title">✨ What's Included?</h2>
        <ul className="boilerplate__features-list">
          <li className="boilerplate__features-item">
            ⚡ Powered by{' '}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              Vite
            </a>{' '}
            for fast development
          </li>
          <li className="boilerplate__features-item">
            📜 Written in{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              TypeScript
            </a>
          </li>
          <li className="boilerplate__features-item">
            🛠️ Linting & Formatting with{' '}
            <a
              href="https://eslint.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              ESLint
            </a>{' '}
            &{' '}
            <a
              href="https://prettier.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              Prettier
            </a>
          </li>
          <li className="boilerplate__features-item">
            ✅ Unit Testing with{' '}
            <a
              href="https://vitest.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              Vitest
            </a>{' '}
            &{' '}
            <a
              href="https://testing-library.com/docs/react-testing-library/intro/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              React Testing Library
            </a>
          </li>
          <li className="boilerplate__features-item">
            🔒 Git Hooks via{' '}
            <a
              href="https://typicode.github.io/husky/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              Husky
            </a>{' '}
            &{' '}
            <a
              href="https://commitlint.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="boilerplate__link"
            >
              Commitlint
            </a>
          </li>
        </ul>
      </section>

      <section className="boilerplate__docs">
        <h2 className="boilerplate__docs-title">📖 Documentation</h2>
        <p className="boilerplate__docs-text">
          Check out the full documentation on
          <a
            className="boilerplate__docs-link"
            href="https://github.com/PabloFuentesSanz/codewithpablo-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="boilerplate__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.47v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.91 1.56 2.38 1.1 2.96.84.09-.66.36-1.1.65-1.35-2.22-.25-4.55-1.12-4.55-4.99 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03A9.58 9.58 0 0 1 12 6.83c.85 0 1.71.11 2.51.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.7 0 3.88-2.34 4.74-4.57 4.99.37.32.69.94.69 1.9v2.82c0 .26.18.56.69.47A10.005 10.005 0 0 0 22 12c0-5.52-4.48-10-10-10z"
              />
            </svg>
            GitHub
          </a>
        </p>
      </section>

      <footer className="boilerplate__footer">
        <p className="boilerplate__footer-text">
          🚀 Start building! Edit <code>src/App.tsx</code> to get started.
        </p>
      </footer>
    </main>
  )
}

export default Home
