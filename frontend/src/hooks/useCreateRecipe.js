import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.post("/recipes", data),
    onSuccess: () => queryClient.invalidateQueries(["recipes"]),
  });
};
