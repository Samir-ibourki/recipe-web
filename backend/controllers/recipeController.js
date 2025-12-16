import Recipe from "../models/Recipe.js";

export const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
};

export const getRecipeById = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  res.json(recipe || { error: "Not found" });
};

export const createRecipe = async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.status(201).json(recipe);
};

export const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (recipe) {
    await recipe.update(req.body);
    res.json(recipe);
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

export const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (recipe) {
    await recipe.destroy();
    res.json({ message: "Deleted" });
  } else {
    res.status(404).json({ error: "Not found" });
  }
};
