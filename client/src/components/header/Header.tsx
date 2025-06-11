import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-title-container">
        <Link className="header-title-text" to="/" replace>
          Hello, World!
        </Link>
      </div>
      <nav className="header-navbar-container">
        <Link className="header-navbar-item" to="/gallery" replace>
          Gallery
        </Link>
        <Link className="header-navbar-item" to="/details" replace>
          Details
        </Link>
      </nav>
    </header>
  );
}
