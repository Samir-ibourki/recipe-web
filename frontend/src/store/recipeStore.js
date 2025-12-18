import { create } from 'zustand';
import { api } from '../api/axios';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  currentRecipe: null,
  isLoading: false,
  error: null,

  // Fetch all recipes
  fetchRecipes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get('/recipes');
      set({ recipes: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Fetch single recipe by ID
  fetchRecipeById: async (id) => {
    set({ isLoading: true, error: null, currentRecipe: null });
    try {
      const response = await api.get(`/recipes/${id}`);
      set({ currentRecipe: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Create recipe
  createRecipe: async (recipeData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/recipes', recipeData);
      // Update local list
      set((state) => ({ 
        recipes: [...state.recipes, response.data],
        isLoading: false 
      }));
      return response.data;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Update recipe
  updateRecipe: async (id, recipeData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put(`/recipes/${id}`, recipeData);
      // Update local list and current recipe if it matches
      set((state) => ({
        recipes: state.recipes.map((r) => (r.id === id ? response.data : r)),
        currentRecipe: state.currentRecipe?.id === id ? response.data : state.currentRecipe,
        isLoading: false
      }));
      return response.data;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Delete recipe
  deleteRecipe: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await api.delete(`/recipes/${id}`);
      set((state) => ({
        recipes: state.recipes.filter((r) => r.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  }
}));

export default useRecipeStore;
