import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFox } from "../api/Fox";

export default function useFoxesCreate() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: createFox,
    onSuccess: () => client.invalidateQueries({ queryKey: ["foxes"] }),
  });
}
