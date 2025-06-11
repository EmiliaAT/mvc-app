import Header from "../header/Header";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout-outlet-container">
        <Outlet />
      </div>
    </>
  );
}
