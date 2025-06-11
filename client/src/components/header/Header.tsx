import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      {/* Header Title */}
      <div className="header-title-container">
        <Link className="header-title-text" to="/" replace>
          Hello, World!
        </Link>
      </div>
    </header>
  );
}
