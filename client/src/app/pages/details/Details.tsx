import { useParams } from "react-router-dom";
import "./Details.css";
import useFoxQuery from "../../../features/foxes/hooks/useFoxQuery";

export default function Details() {
  const { id } = useParams();

  const numId = Number(id);

  const fox = useFoxQuery(numId);

  if (fox.isLoading) {
    return <p>Loading...</p>;
  }

  if (fox.isError) {
    return <p>Error!</p>;
  }

  return (
    <main className="details-container">
      {/* Details Ribbon */}
      <header className="details-title-container">
        <h1 className="details-title-text">Details</h1>
      </header>
      {/* Details Content */}
      <div className="details-content-container">
        <h2 className="details-name-text">{fox.data?.name}</h2>
        <p className="details-colour-text">Colour: {fox.data?.colour}</p>
        <p className="details-species-text">Species: {fox.data?.species}</p>
        <p className="details-description-text">{fox.data?.description}</p>
      </div>
    </main>
  );
}
