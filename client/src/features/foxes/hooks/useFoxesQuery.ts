import { useQuery } from "@tanstack/react-query";
import { getFox, getFoxes } from "../api/Fox";
import type { FoxProps } from "../types/Fox";

export default function useFoxesQuery(props: FoxProps | undefined = undefined) {
  return useQuery({
    queryKey: ["foxes", props],
    queryFn: () => (props === undefined ? getFoxes() : getFox(props)),
  });
}
