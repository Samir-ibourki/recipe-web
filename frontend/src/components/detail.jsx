import { useParams, Link } from "react-router-dom";
import { useRecipeById } from "../hooks/useRecipeById";
import Johnsmith from "./johnsmith";
import Ingredients from "./ingredients";
import Directions from "./directions";
import OtherRecipes from "./OtherRecipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useRecipeById(id);
  if (isLoading) {
    return (
      <div className="text-center py-32 text-3xl">
        Chargement de la recette...
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="text-center py-32 text-3xl text-red-500">
        Recette non trouvée
      </div>
    );
  }
  return (
    <div className="max-w-[95vw] mx-auto p-[2.5rem]">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
      >
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        <span className="font-semibold text-lg">Back to Home</span>
      </Link>
      {/*title */}
      <div className="mb-[2.5rem]">
        <h1 className="text-[3rem] font-semibold capitalize mt-[2rem] ">
          {recipe.title}
        </h1>

        <div className="flex justify-between items-center mt-[1.2rem] ">
          <div className="flex items-center gap-[4rem] mt-[1.2rem] ">
            <Johnsmith />
            <span className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-lg"></i>
              <span>
                <p className="font-bold  ">PREP TIME</p>
                <p>{recipe.prepTime}</p>
              </span>
            </span>
            <span className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-lg"></i>
              <span>
                <p className="font-bold  ">COOK TIME</p>
                <p>{recipe.cookTime}</p>
              </span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-utensils text-lg"></i>
              <p>{recipe.category}</p>
            </span>
          </div>

          <span className="flex flex-col items-center gap-[1rem] ">
            <i class="fa-solid fa-share bg-[#E7FAFE] p-[1rem] rounded-full  "></i>
            <button className="uppercase font-semibold">Share</button>
          </span>
        </div>
      </div>

      <div className="min-h-screen w-full">
        <div className="">
          <div className="flex justify-between">
            {/* image section */}
            <div className="relative w-[65%] h-[30rem]">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/*play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>

            {/* Nutrition Information Section */}
            <div className="w-[30%] bg-[#E7FAFE] rounded-2xl p-8 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nutrition Information
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Calories</span>
                  <span className="font-semibold text-gray-900">
                    {recipe.nutrition?.calories || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Fat</span>
                  <span className="font-semibold text-gray-900">
                    {" "}
                    {recipe.nutrition?.fat || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Protein</span>
                  <span className="font-semibold text-gray-900">
                    {" "}
                    {recipe.nutrition?.protein || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Carbohydrate</span>
                  <span className="font-semibold text-gray-900">
                    {" "}
                    {recipe.nutrition?.fat || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cholesterol</span>
                  <span className="font-semibold text-gray-900">
                    {" "}
                    {recipe.nutrition?.protein || "N/A"}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-100 ">
                <p className="text-xs text-center font-semibold  text-gray-600 leading-relaxed">
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-6xl">
            <p className="text-gray-700 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Two Column Layout for Ingredients/Directions & Sidebar */}
          <div className="flex flex-col lg:flex-row gap-16 mt-16">
            <div className="w-full lg:w-[65%]">
               <Ingredients ingredients={recipe.ingredients} />
               <Directions instructions={recipe.instructions} />
            </div>
            <div className="w-full lg:w-[30%]">
               <OtherRecipes currentId={id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
