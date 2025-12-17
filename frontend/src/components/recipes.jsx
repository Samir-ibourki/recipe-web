// import recipes from "../data/recipes.json";
import { useRecipes } from "../hooks/useRecipes";

export default function Recipes() {
  const {data:recipes, isLoading, error} = useRecipes()
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
    <section className="w-[95vw] mx-auto my-[4rem]">
      <div className="text-center mb-[3rem]">
        <h1 className="text-[2.8rem] font-bold mb-4">
          Simple and tasty recipes
        </h1>
        <p className="text-[#00000099] text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="grid grid-cols-3 grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-[#E7FAFE] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
          >
            {/*image*/}
            <div className="h-[16rem] overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/*contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 line-clamp-2">
                {recipe.title}
              </h3>

              <div className="flex justify-between items-center text-[#00000099]">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-lg"></i>
                  <p>{recipe.prepTime} Minutes</p>
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-utensils text-lg"></i>
                  <p>{recipe.category}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
