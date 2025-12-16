import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios.js";
export const useRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const { data } = await api.get("/recipes");
      return data;
    },
  });
};
