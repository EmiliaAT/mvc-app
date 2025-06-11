import axios from "axios";
import type { Fox, Foxes, FoxProps } from "../types/Fox";

export const getFoxes = async (): Promise<Foxes> => {
  const response = await axios.get("http://localhost:8080/api/foxes");
  return response.data as Foxes;
};

export const getFox = async (props: FoxProps): Promise<Fox | undefined> => {
  switch (props.kind) {
    case "id":
      return (
        await axios.get("http://localhost:8080/api/foxes/" + String(props.key))
      ).data as Fox;
    case "name":
      return (
        await axios.get("http://localhost:8080/api/foxes/name", {
          params: { key: props.key },
        })
      ).data as Fox;
    case "colour":
      return (
        await axios.get("http://localhost:8080/api/foxes/colour", {
          params: { key: props.key },
        })
      ).data as Fox;
    case "species":
      return (
        await axios.get("http://localhost:8080/api/foxes/species", {
          params: { key: props.key },
        })
      ).data as Fox;
    case "description":
      return (
        await axios.get("http://localhost:8080/api/foxes/description", {
          params: { key: props.key },
        })
      ).data as Fox;
  }
};
