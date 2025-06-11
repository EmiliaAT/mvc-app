import { useParams } from "react-router-dom";
import "./Details.css";
import useFoxQuery from "../../../features/foxes/hooks/useFoxQuery";
import { useState, type FormEvent } from "react";
import useFoxesUpdate from "../../../features/foxes/hooks/useFoxesUpdate";
import type { Fox } from "../../../features/foxes/types/Fox";

export default function Details() {
  const { id } = useParams();

  const [isEditing, setIsEditing] = useState(false);

  const updateFox = useFoxesUpdate();

  const numId = Number(id);

  const fox = useFoxQuery(numId);

  const handleSetEditing = () => {
    setIsEditing(!isEditing);
  };

  if (fox.isLoading) {
    return <p>Loading...</p>;
  }

  if (fox.isError) {
    return <p>Error!</p>;
  }

  const handleUpdateFox = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fox: Fox = {
      id: numId,
      name: data.get("name") as string,
      colour: data.get("colour") as string,
      species: data.get("species") as string,
      description: data.get("description") as string,
    };
    updateFox.mutate(fox);
    setIsEditing(false);
  };

  return (
    <main className="details-container">
      {/* Details Ribbon */}
      <header className="details-ribbon-container">
        <h1 className="details-title-text">Details</h1>
        <button
          type="button"
          className={"details-options-button" + (isEditing ? " cancel" : "")}
          onClick={handleSetEditing}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </header>
      {/* Details Content */}
      <form className="details-content-container" onSubmit={handleUpdateFox}>
        <p className="details-name-text">Name:</p>
        {isEditing ? (
          <input
            type="text"
            className="details-name-field"
            name="name"
            defaultValue={fox.data?.name}
          />
        ) : (
          <p className="details-name-content">{fox.data?.name}</p>
        )}
        <p className="details-colour-text">Colour:</p>
        {isEditing ? (
          <input
            type="text"
            className="details-colour-field"
            name="colour"
            defaultValue={fox.data?.colour}
          />
        ) : (
          <p className="details-colour-content">{fox.data?.colour}</p>
        )}
        <p className="details-species-text">Species:</p>
        {isEditing ? (
          <input
            type="text"
            className="details-species-field"
            name="species"
            defaultValue={fox.data?.species}
          />
        ) : (
          <p className="details-species-content">{fox.data?.species}</p>
        )}
        <p className="details-description-text">Description:</p>
        {isEditing ? (
          <input
            type="text"
            className="details-description-field"
            name="description"
            defaultValue={fox.data?.description}
          />
        ) : (
          <p className="details-description-content">{fox.data?.description}</p>
        )}
        {isEditing ? (
          <button type="submit" className="details-submit">
            Submit
          </button>
        ) : (
          <></>
        )}
      </form>
    </main>
  );
}
