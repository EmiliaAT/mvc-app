import { useNavigate } from "react-router-dom";
import type { Fox } from "../../../../../features/foxes/types/Fox";
import "./FoxIcon.css";

export interface FoxIconProps {
  item: Fox;
}

export default function FoxIcon({ item }: FoxIconProps) {
  const navigate = useNavigate();

  const onClick = () => {
    void navigate("/details?name=" + String(item.id));
  };

  return (
    <button type="button" className="gallery-icon-container" onClick={onClick}>
      <div className="gallery-icon-details-container">
        <p className="gallery-icon-details-name">Name: {item.name}</p>
        <p className="gallery-icon-details-colour">Colour: {item.colour}</p>
        <p className="gallery-icon-details-species">Species: {item.species}</p>
        <p className="gallery-icon-details-description">{item.description}</p>
      </div>
    </button>
  );
}
