import { Link } from "react-router-dom";

export default function MiniRecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="flex gap-4 group">
      <div className="w-[120px] h-[80px] flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h4 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2 hover:underline decoration-2 underline-offset-2">
          {recipe.title}
        </h4>
        <p className="text-sm text-gray-500">By Admin</p>
      </div>
    </Link>
  );
}
