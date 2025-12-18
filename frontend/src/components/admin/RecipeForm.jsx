import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/axios";
import { useQueryClient } from "@tanstack/react-query";

export default function RecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    prepTime: "",
    cookTime: "",
    category: "",
    ingredients: [], // Array of strings or structured objects
    instructions: [], // Array of step objects
    nutrition: {
        calories: "",
        fat: "",
        protein: ""
    }
  });

  // State for simple string inputs vs structured complexity
  // For simplicity MVP, we'll store ingredients as line-separated text in UI, parse to array on submit
  const [ingredientsText, setIngredientsText] = useState("");
  const [instructionsText, setInstructionsText] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      api.get(`/recipes/${id}`).then((res) => {
        const data = res.data;
        setFormData(data);
        
        // Parse ingredients for textarea
        if (Array.isArray(data.ingredients)) {
             // Handle simple array of strings or objects. For MVP edit, we might simplify to flat list or JSON string
             // Simplest approach: Just JSON stringify for the "advanced" field, or try to flatten
             // Let's use JSON string for full power
             setIngredientsText(JSON.stringify(data.ingredients, null, 2));
        } else {
             setIngredientsText(data.ingredients || "");
        }

        // Parse instructions
         if (Array.isArray(data.instructions)) {
             setInstructionsText(JSON.stringify(data.instructions, null, 2));
        } else {
             setInstructionsText(data.instructions || "");
        }

        setLoading(false);
      }).catch(err => {
          console.error(err);
          setLoading(false);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Try parse JSON fields
      let parsedIngredients = ingredientsText;
      let parsedInstructions = instructionsText;

      try {
          parsedIngredients = JSON.parse(ingredientsText);
      } catch (e) {
          // If not valid JSON, treat as splitting by newline for simple ingredients
          // IF the user intended JSON but failed, this falls back to string array. 
          // However, our initial seed data is complex. Let's assume if it starts with [ or { it's JSON attempts.
          if (ingredientsText.trim().startsWith('[') || ingredientsText.trim().startsWith('{')) {
              alert("Invalid JSON in ingredients");
              setLoading(false);
              return;
          }
           parsedIngredients = ingredientsText.split('\n').filter(line => line.trim() !== "");
      }

      try {
        parsedInstructions = JSON.parse(instructionsText);
      } catch (e) {
          if (instructionsText.trim().startsWith('[') || instructionsText.trim().startsWith('{')) {
               alert("Invalid JSON in instructions");
              setLoading(false);
              return;
          }
          // specific simple format conversion
          parsedInstructions = instructionsText.split('\n').filter(line => line.trim() !== "").map((text, idx) => ({
              step: idx + 1,
              text: text
          }));
      }

      const payload = {
        ...formData,
        ingredients: parsedIngredients,
        instructions: parsedInstructions
      };

      if (id) {
        await api.put(`/recipes/${id}`, payload);
        alert("Recipe updated!");
      } else {
        await api.post("/recipes", payload);
        alert("Recipe created!");
      }

      queryClient.invalidateQueries(["recipes"]);
      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert("Error saving recipe");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      if (name.includes('.')) {
          const [parent, child] = name.split('.');
          setFormData(prev => ({
              ...prev,
              [parent]: {
                  ...prev[parent],
                  [child]: value
              }
          }));
      } else {
          setFormData(prev => ({ ...prev, [name]: value }));
      }
  };

  if (loading && id && !formData.title) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
         <h1 className="text-3xl font-bold text-gray-900">{id ? "Edit Recipe" : "New Recipe"}</h1>
         <button 
           onClick={() => navigate('/admin')}
           className="text-gray-500 hover:text-black font-medium"
         >
           Cancel
         </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        
        {/* Basic Info */}
        <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-100 pb-2">Basic Information</h2>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Recipe Title</label>
                    <input 
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="e.g. Juicy Beef Burger"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                    <textarea 
                      required
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="Short description of the dish..."
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                    <input 
                      required
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="https://..."
                    />
                </div>
                <div className="grid grid-cols-3 gap-6">
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                         <input 
                            required
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                            placeholder="e.g. Lunch"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Prep Time</label>
                         <input 
                            required
                            name="prepTime"
                            value={formData.prepTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                            placeholder="e.g. 30 Minutes"
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Cook Time</label>
                         <input 
                            required
                            name="cookTime"
                            value={formData.cookTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                            placeholder="e.g. 15 Minutes"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Nutrition */}
        <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-100 pb-2">Nutrition</h2>
            <div className="grid grid-cols-3 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Calories</label>
                    <input 
                      name="nutrition.calories"
                      value={formData.nutrition?.calories || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="e.g. 350 kcal"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Fat</label>
                    <input 
                      name="nutrition.fat"
                      value={formData.nutrition?.fat || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="e.g. 10g"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Protein</label>
                    <input 
                      name="nutrition.protein"
                      value={formData.nutrition?.protein || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors"
                      placeholder="e.g. 20g"
                    />
                </div>
            </div>
        </div>

        {/* Detailed Data */}
        <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-100 pb-2">Details</h2>
            
            <div>
                 <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-700">Ingredients (JSON or New line separated)</label>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">Advanced</span>
                 </div>
                <textarea 
                    value={ingredientsText}
                    onChange={(e) => setIngredientsText(e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors font-mono text-sm"
                    placeholder={`Simple list:
Tomato
Cheese

OR Complex JSON:
[
  { "title": "Sauce", "items": ["Tomato", "Salt"] }
]`}
                />
            </div>

             <div>
                 <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-700">Instructions (JSON or New line separated)</label>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">Advanced</span>
                 </div>
                <textarea 
                    value={instructionsText}
                    onChange={(e) => setInstructionsText(e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 transition-colors font-mono text-sm"
                    placeholder={`Simple list:
Chop onions
Boil water

OR Complex JSON:
[
  { "step": 1, "text": "Chop onions" }
]`}
                />
            </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
             <button 
               type="button" 
               onClick={() => navigate('/admin')}
               className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
             >
               Cancel
             </button>
             <button 
               type="submit" 
               disabled={loading}
               className="px-8 py-3 rounded-xl font-bold bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50"
             >
               {loading ? "Saving..." : (id ? "Update Recipe" : "Create Recipe")}
             </button>
        </div>

      </form>
    </div>
  );
}
