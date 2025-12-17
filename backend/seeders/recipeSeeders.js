import Recipe from "../models/Recipe.js";

export const runRecipeSeeders = async () => {
  const count = await Recipe.count();
  if (count > 0) {
    console.log("Recettes déjà seedées, on skip");
    return;
  }

  await Recipe.bulkCreate([
    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "lore",
      instructions: "Grill the beef, add cheese, assemble...",
      prepTime: 15,
      cookTime: 10,
      category: "Snack",
      imageUrl:
        "https://i.pinimg.com/1200x/5f/2e/46/5f2e469621c8cc2e482373b3a3868865.jpg",
    },
    {
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Salmon, lime, ginger, soy sauce",
      instructions: "Marinate and roast...",
      prepTime: 20,
      cookTime: 25,
      category: "Fish",
      imageUrl:
        "https://i.pinimg.com/736x/f5/d3/4b/f5d34b499db752e34ee400dcb186cfd6.jpg",
    },
    {
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Breakfast",
      imageUrl:
        "https://i.pinimg.com/1200x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg",
    },
    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Healty",
      imageUrl:
        "https://i.pinimg.com/1200x/6c/30/82/6c3082516e7914ef7131b9e4fe2f372d.jpg",
    },
    {
      title: "Chicken Meatballs with Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Meat",
      imageUrl:
        "https://i.pinimg.com/1200x/f1/5e/45/f15e4523fc21b224f6af4f0b124db358.jpg",
    },
    {
      title: "Chicken Meatballs with Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Meat",
      imageUrl:
        "https://i.pinimg.com/736x/2c/00/75/2c00755bcff5fa5b883e2067f4b544fb.jpg",
    },
    {
      title: "Fruity Pancake with Orange & Blueberry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Sweet",
      imageUrl:
        "https://i.pinimg.com/1200x/b4/39/0a/b4390ac3fd22de10baa02e8402dbe87a.jpg",
    },
    {
      title: "The Best Easy One Pot Chicken and Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Snack",
      imageUrl:
        "https://i.pinimg.com/736x/f1/ee/d1/f1eed19e1ea89d779644f8ecb353d39f.jpg",
    },
    {
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: 10,
      cookTime: 15,
      category: "Noodles",
      imageUrl:
        "https://i.pinimg.com/736x/96/9b/8e/969b8eb9e5ceb585789abe8c17d87c73.jpg",
    },
  ]);

  console.log("recettes seedes avec succes, (9+ recettes)");
};
