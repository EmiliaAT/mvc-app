import { useQuery } from "@tanstack/react-query";
import { getFox } from "../api/Fox";

export default function useFoxQuery(id: number) {
  return useQuery({
    queryKey: ["foxes", id],
    queryFn: () => getFox({ kind: "id", key: id }).then((foxes) => foxes[0]),
  });
}
