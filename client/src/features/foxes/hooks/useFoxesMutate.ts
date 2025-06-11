import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFox } from "../api/Fox";

export default function useFoxesMutate() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: deleteFox,
    onSuccess: () => client.invalidateQueries({ queryKey: ["foxes"] }),
  });
}
