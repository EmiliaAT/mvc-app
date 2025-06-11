import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFox } from "../api/Fox";

export default function useFoxesUpdate() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: updateFox,
    onSuccess: () => client.invalidateQueries({ queryKey: ["foxes"] }),
  });
}
