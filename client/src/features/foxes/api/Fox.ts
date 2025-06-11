import axios from "axios";
import type { Fox, Foxes, FoxProps } from "../types/Fox";

export const getFoxes = async (): Promise<Foxes> => {
  const response = await axios.get("http://localhost:8080/api/foxes");
  return response.data as Foxes;
};

export const getFox = async (props: FoxProps): Promise<Foxes> => {
  switch (props.kind) {
    case "id":
      return [
        (
          await axios.get(
            "http://localhost:8080/api/foxes/" + String(props.key)
          )
        ).data,
      ].filter((fox) => fox) as Foxes;
    case "name":
      return (
        await axios.get("http://localhost:8080/api/foxes/name", {
          params: { key: props.key },
        })
      ).data as Foxes;
    case "colour":
      return (
        await axios.get("http://localhost:8080/api/foxes/colour", {
          params: { key: props.key },
        })
      ).data as Foxes;
    case "species":
      return (
        await axios.get("http://localhost:8080/api/foxes/species", {
          params: { key: props.key },
        })
      ).data as Foxes;
    case "description":
      return (
        await axios.get("http://localhost:8080/api/foxes/description", {
          params: { key: props.key },
        })
      ).data as Foxes;
  }
};

export const deleteFox = async (id: number): Promise<void> => {
  await axios.delete("http://localhost:8080/api/foxes/" + String(id));
};

export const updateFox = async (fox: Fox): Promise<void> => {
  const { id, ...body } = fox;
  await axios.put("http://localhost:8080/api/foxes/" + String(id), body);
};

export const createFox = async (fox: Omit<Fox, "id">): Promise<void> => {
  await axios.post("http://localhost:8080/api/foxes", fox);
};
