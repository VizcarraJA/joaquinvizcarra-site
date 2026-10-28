import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="page-intro">
          This page may have moved or been retired. You can explore my current
          research or return to the homepage.
        </p>
      </header>
      <nav className="profile-links" aria-label="Continue exploring">
        <Link className="text-link" href="/research">
          Explore research
        </Link>
        <Link className="text-link" href="/">
          Return home
        </Link>
      </nav>
    </div>
  );
}
