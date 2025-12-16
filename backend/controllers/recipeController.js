import Recipe from "../models/Recipe.js";
import { Op } from "sequelize";

export const getAllRecipes = async (req, res) => {
  try {
    const { search, category } = req.query;

    let where = {};
    if (search) {
      where.title = { [Op.iLike]: `%${search}%` };
    }
    if (category) {
      where.category = category;
    }

    const recipes = await Recipe.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe)
      return res.status(404).json({ message: "Recette non trouvée" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: "Erreur création", error: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe)
      return res.status(404).json({ message: "Recette non trouvée" });

    await recipe.update(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ message: "Erreur mise à jour" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe)
      return res.status(404).json({ message: "Recette non trouvée" });

    await recipe.destroy();
    res.json({ message: "Recette supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression" });
  }
};
