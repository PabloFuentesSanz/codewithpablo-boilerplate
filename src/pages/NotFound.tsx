import './../styles/not-found.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">🚧 404 - Page Not Found</h1>
      <p className="not-found__message">
        Oops! The page you are looking for doesn't exist. 🚀
      </p>
      <a href="/" className="not-found__link">
        Go Back Home
      </a>
    </div>
  )
}
