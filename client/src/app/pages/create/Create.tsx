import type { FormEvent } from "react";
import useFoxesCreate from "../../../features/foxes/hooks/useFoxesCreate";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import type { Fox } from "../../../features/foxes/types/Fox";

export default function Create() {
  const navigate = useNavigate();

  const createFox = useFoxesCreate();

  const handleCreateFox = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fox: Omit<Fox, "id"> = {
      name: data.get("name") as string,
      colour: data.get("colour") as string,
      species: data.get("species") as string,
      description: data.get("description") as string,
    };
    createFox.mutate(fox);
    void navigate("/gallery", { replace: true });
  };

  return (
    <main className="create-container">
      {/* Create Ribbon */}
      <header className="create-ribbon-container">
        <div className="create-title-container">
          <h1 className="create-title-text">Create New</h1>
        </div>
      </header>
      {/* Create Content */}
      <form className="create-content-container" onSubmit={handleCreateFox}>
        <p className="create-name-text">Name:</p>
        <input type="text" className="create-name-field" name="name" />
        <p className="create-colour-text">Colour:</p>
        <input type="text" className="create-colour-field" name="colour" />
        <p className="create-species-text">Species:</p>
        <input type="text" className="create-species-field" name="species" />
        <p className="create-description-text">Description:</p>
        <input
          type="text"
          className="create-description-field"
          name="description"
        />
        <button type="submit" className="create-submit">
          Submit
        </button>
      </form>
    </main>
  );
}
