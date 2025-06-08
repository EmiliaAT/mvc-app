import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <header className="header-container">
      {/* Header Title */}
      <div className="header-title-container">
        <Link className="header-title-text" to="/" replace>
          Hello, World!
        </Link>
      </div>
      {/* Header Sidebar */}
      <div className="header-sidebar-container">
        <Navbar>
          <Link className="header-navbar-item" to="/" replace>
            Test 1
          </Link>
          <Link className="header-navbar-item" to="/" replace>
            Test 2
          </Link>
        </Navbar>
      </div>
    </header>
  );
}
