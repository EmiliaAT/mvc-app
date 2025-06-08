import { BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}
