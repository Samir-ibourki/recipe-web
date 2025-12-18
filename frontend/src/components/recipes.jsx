import { useRecipes } from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const { data: recipes, isLoading, error } = useRecipes();
  if (isLoading) {
    return (
      <section className="w-[95vw] mx-auto my-[4rem] text-center">
        <p className="text-2xl">Chargement des recettes...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-[95vw] mx-auto my-[4rem] text-center">
        <p className="text-red-500 text-2xl">Erreur: {error.message}</p>
      </section>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <section className="w-[95vw] mx-auto my-[4rem] text-center">
        <p className="text-2xl">Aucune recette trouvée</p>
      </section>
    );
  }
  return (
    <section className="lg:w-[95vw] w-[90vw] mx-auto my-[4rem]">
      <div className="text-center mb-[3rem]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Simple and tasty recipes
        </h1>
        <p className="text-[#00000099]  lg:text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
