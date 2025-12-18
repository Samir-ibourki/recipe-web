import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useRecipeById = (id) => {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: () =>
      api.get(`/recipes/${id}`).then((res) => {
        console.log("Recipe data from API:", res.data);
        return res.data;
      }),

    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
