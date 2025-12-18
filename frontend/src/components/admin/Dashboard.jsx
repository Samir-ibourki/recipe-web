import { Link } from "react-router-dom";
import { useRecipes } from "../../hooks/useRecipes";
import { api } from "../../api/axios";
import { useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  const { data: recipes, isLoading } = useRecipes();
  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await api.delete(`/recipes/${id}`);
        queryClient.invalidateQueries(["recipes"]);
        alert("Recipe deleted successfully");
      } catch (error) {
        alert("Failed to delete recipe");
        console.error(error);
      }
    }
  };

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your recipes and content</p>
        </div>
        <Link
          to="/admin/create"
          className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          Add New Recipe
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-8 py-6 font-semibold text-gray-900">Recipe</th>
                <th className="px-8 py-6 font-semibold text-gray-900">Category</th>
                <th className="px-8 py-6 font-semibold text-gray-900">Time</th>
                <th className="px-8 py-6 font-semibold text-gray-900 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recipes?.map((recipe) => (
                <tr key={recipe.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="w-16 h-16 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <Link to={`/recipes/${recipe.id}`} className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            {recipe.title}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">ID: {recipe.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">
                      {recipe.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-600 font-medium">
                    <div className="flex flex-col gap-1">
                       <span className="text-xs text-gray-400 uppercase tracking-wider">Prep</span>
                       {recipe.prepTime}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        to={`/admin/edit/${recipe.id}`}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all"
                        title="Edit"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                      <button
                        onClick={() => handleDelete(recipe.id)}
                        className="w-10 h-10 rounded-full border border-red-100 bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all"
                        title="Delete"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(!recipes || recipes.length === 0) && (
            <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-2xl">
                    <i className="fa-solid fa-book-open"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No recipes found</h3>
                <p className="text-gray-500 mb-6">Get started by creating your first recipe.</p>
                 <Link
                  to="/admin/create"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
                >
                  Create Recipe <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        )}
      </div>
    </div>
  );
}
