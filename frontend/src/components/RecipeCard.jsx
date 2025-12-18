import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <Link to={`/recipes/${recipe.id}`} className="block h-full">
      <div className="bg-[#E7FAFE] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col">
        {/*image*/}
        <div className="h-[16rem] overflow-hidden relative group">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/*contenu */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-4 line-clamp-2 text-gray-800">
            {recipe.title}
          </h3>

          <div className="mt-auto flex justify-between items-center text-[#00000099]">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-lg text-blue-400"></i>
              <p className="font-medium text-sm">{recipe.prepTime}</p>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-utensils text-lg text-orange-400"></i>
              <p className="font-medium text-sm capitalize">{recipe.category}</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
