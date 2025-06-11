import { useState, type ChangeEvent } from "react";
import useFoxesQuery from "../../../features/foxes/hooks/useFoxesQuery";
import FoxIcon from "./components/icon/FoxIcon";
import "./Gallery.css";
import { Link, useNavigate } from "react-router-dom";
import useFoxesDelete from "../../../features/foxes/hooks/useFoxesDelete";

export default function Gallery() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const foxes = useFoxesQuery(
    filter == "" ? undefined : { kind: "name", key: filter }
  );

  const deleteFox = useFoxesDelete();

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const handleSetDeleting = () => {
    setIsDeleting(!isDeleting);
  };

  const handleOpenIcon = (id: number) => {
    void navigate("/details/" + String(id));
  };

  const handleDeleteIcon = (id: number) => {
    deleteFox.mutate(id);
  };

  const handleClickIcon = isDeleting ? handleDeleteIcon : handleOpenIcon;

  return (
    <main className="gallery-container">
      {/* Gallery Ribbon */}
      <header className="gallery-ribbon-container">
        <div className="gallery-title-container">
          <h1 className="gallery-title-text">Gallery</h1>
        </div>
        <div className="gallery-filter">
          <input
            type="text"
            className="gallery-filter-field"
            placeholder="Filter Name:"
            onChange={handleFilterChange}
          />
        </div>
        <div className="gallery-options-container">
          <Link className="gallery-options-button" to="/create">
            Add
          </Link>
          <button
            type="button"
            className="gallery-options-button"
            onClick={handleSetDeleting}
          >
            {isDeleting ? "Cancel" : "Remove"}
          </button>
        </div>
      </header>
      {/* Gallery Content */}
      <section className="gallery-content-container">
        {foxes.isLoading ? (
          <p>Loading...</p>
        ) : foxes.error ? (
          <p>Error!</p>
        ) : (
          foxes.data?.map((fox) => (
            <FoxIcon key={fox.id} item={fox} onClick={handleClickIcon} />
          ))
        )}
      </section>
    </main>
  );
}
