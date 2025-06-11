import { useQuery } from "@tanstack/react-query";
import { getFoxes } from "../api/Fox";

export default function useFoxesQuery() {
  return useQuery({
    queryKey: ["foxes"],
    queryFn: getFoxes,
  });
}
