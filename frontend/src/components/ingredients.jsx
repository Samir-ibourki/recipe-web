import Check from "./check";

export default function Ingridients() {
  const otherRecipes = [
    {
      image: "/assets/recip/recip2.png",
      title: "Chicken Meatball with Creamy Chees...",
      author: "By Andreas Paula",
    },
    {
      image: "/assets/recip/recip3.png",
      title: "The Creamiest Creamy Chicken an...",
      author: "By Andreas Paula",
    },
    {
      image: "/assets/recip/recip4.png",
      title: "The Best Easy One Pot Chicken and Rice",
      author: "By Andreas Paula",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
        
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/*ingredients section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ingredients
            </h2>

            {/*for main dish */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                For main dish
              </h3>
              <div className="space-y-3">
                <Check />
                <hr style={{color:'#eee'}} />
                <Check />
                <hr style={{color:'#eee'}} />
                <Check />
                <hr style={{color:'#eee'}} />
                <Check />
                <hr style={{color:'#eee'}} />
              </div>
            </div>

            {/* for the sauce */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                For the sauce
              </h3>
              <div className="space-y-3">
                <Check />
                <hr style={{color:'#eee'}} />
                <Check />
                <hr style={{color:'#eee'}} />
                <Check />
                <hr style={{color:'#eee'}} />
              </div>
            </div>
          </div>

          {/* other recipe section */}
          <div className="w-[400px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Other Recipe
            </h2>
            <div className="space-y-6">
              {otherRecipes.map((recipe, index) => (
                <div
                  key={index}
                  className="flex gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-40 h-28 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {recipe.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">{recipe.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
