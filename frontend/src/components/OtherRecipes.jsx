import { useRecipes } from "../hooks/useRecipes";
import MiniRecipeCard from "./MiniRecipeCard";

export default function OtherRecipes({ currentId }) {
  const { data: recipes, isLoading } = useRecipes();

  if (isLoading || !recipes) return null;

  // Filter out current recipe and take top 3
  const otherRecipes = recipes
    .filter((r) => String(r.id) !== String(currentId))
    .slice(0, 3);

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-8">Other Recipe</h3>
      <div className="flex flex-col gap-6">
        {otherRecipes.map((recipe) => (
          <MiniRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
