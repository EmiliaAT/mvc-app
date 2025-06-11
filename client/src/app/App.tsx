import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/gallery/Gallery";
import Details from "./pages/details/Details";
import Layout from "../components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Create from "./pages/create/Create";

export default function App() {
  return (
    <div className="app-container">
      {/* Top Level Context Definitions */}
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          {/* App Route Definitions */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/gallery" replace />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="create" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
