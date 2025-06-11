import useFoxesQuery from "../../../features/foxes/hooks/useFoxesQuery";
import "./Gallery.css";

export default function Gallery() {
  const foxes = useFoxesQuery();

  if (foxes.isLoading) {
    return <p>Loading...</p>;
  }

  if (foxes.error) {
    return <p>Error!</p>;
  }

  return (
    <main className="gallery-container">
      <header className="gallery-title-container">
        <h1 className="gallery-title-text">Gallery</h1>
      </header>
      <section className="gallery-content-container">
        {foxes.data?.map((fox) => (
          <p key={fox.id}>{JSON.stringify(fox)}</p>
        ))}
      </section>
    </main>
  );
}
