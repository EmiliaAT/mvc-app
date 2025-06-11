import useFoxesQuery from "../../../features/foxes/hooks/useFoxesQuery";
import FoxIcon from "./components/icon/FoxIcon";
import "./Gallery.css";

export default function Gallery() {
  const foxes = useFoxesQuery();

  return (
    <main className="gallery-container">
      <header className="gallery-title-container">
        <h1 className="gallery-title-text">Gallery</h1>
      </header>
      <section className="gallery-content-container">
        {foxes.isLoading ? (
          <p>Loading...</p>
        ) : foxes.error ? (
          <p>Error!</p>
        ) : (
          foxes.data?.map((fox) => <FoxIcon key={fox.id} item={fox} />)
        )}
      </section>
    </main>
  );
}
