export default function Ingredients({ ingredients }) {
  if (!ingredients) return null;

  // Helper to render a list of items
  const renderList = (items) => (
    <ul className="space-y-6">
       {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0">
          <div className="relative flex items-center pt-1">
             <input 
               type="checkbox" 
               className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-gray-200 checked:border-black checked:bg-black transition-all"
             />
             <i className="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-2px)] text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></i>
          </div>
          <span className="text-gray-600 text-lg flex-1 leading-relaxed line-through-checked peer-checked:text-black peer-checked:line-through transition-all">{item}</span>
        </li>
      ))}
    </ul>
  );

  // Parse if it's a string (backwards compatibility)
  let parsedIngredients = ingredients;
  if (typeof ingredients === 'string') {
     try {
        parsedIngredients = JSON.parse(ingredients);
     } catch (e) {
        // Treat as single plain string or comma separated if parse fails
        return (
           <div className="mt-8">
              <h2 className="text-3xl font-bold mb-8">Ingredients</h2>
              <p className="text-gray-600">{ingredients}</p>
           </div>
        );
     }
  }

  // Handle array of sections structure vs flat array
  const isStructured = Array.isArray(parsedIngredients) && parsedIngredients.length > 0 && typeof parsedIngredients[0] === 'object' && 'title' in parsedIngredients[0];
  
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Ingredients</h2>
      
      {isStructured ? (
        parsedIngredients.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-bold mb-6">{section.title}</h3>
            {renderList(section.items)}
          </div>
        ))
      ) : (
        renderList(Array.isArray(parsedIngredients) ? parsedIngredients : [])
      )}
    </div>
  );
}
