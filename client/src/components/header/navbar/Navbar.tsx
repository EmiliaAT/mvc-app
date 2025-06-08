import "./Navbar.css";
import type { PropsWithChildren } from "react";

export default function Navbar({ children }: PropsWithChildren) {
  return <nav className="header-navbar-container">{children}</nav>;
}
