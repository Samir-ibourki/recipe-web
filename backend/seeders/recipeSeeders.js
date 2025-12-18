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
      ingredients: [
        {
          title: "For main dish",
          items: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
          ],
        },
        {
          title: "For the sauce",
          items: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
          ],
        },
      ],
      instructions: [
        {
          step: 1,
          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          step: 2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          step: 3,
          text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
      ],
      prepTime: "15 Minutes",
      cookTime: "10 Minutes",
      category: "Snack",
      imageUrl:
        "https://i.pinimg.com/1200x/5f/2e/46/5f2e469621c8cc2e482373b3a3868865.jpg",
      nutrition: {
        calories: "220 kcal",
        protein: "10g",
        fat: "12g",
      },
    },
    {
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Salmon, lime, ginger, soy sauce",
      instructions: "Marinate and roast...",
      prepTime: "20 Minutes",
      cookTime: "25 Minutes",
      category: "Fish",
      imageUrl:
        "https://i.pinimg.com/736x/f5/d3/4b/f5d34b499db752e34ee400dcb186cfd6.jpg",
      nutrition: {
        calories: "350 kcal",
        protein: "25g",
        fat: "15g",
      },
    },
    {
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Breakfast",
      imageUrl:
        "https://i.pinimg.com/1200x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg",
      nutrition: {
        calories: "180 kcal",
        protein: "5g",
        fat: "2g",
      },
    },
    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Healty",
      imageUrl:
        "https://i.pinimg.com/1200x/6c/30/82/6c3082516e7914ef7131b9e4fe2f372d.jpg",
      nutrition: {
        calories: "150 kcal",
        protein: "3g",
        fat: "8g",
      },
    },
    {
      title: "Chicken Meatballs with Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Meat",
      imageUrl:
        "https://i.pinimg.com/1200x/f1/5e/45/f15e4523fc21b224f6af4f0b124db358.jpg",
      nutrition: {
        calories: "300 kcal",
        protein: "20g",
        fat: "18g",
      },
    },
    {
      title: "Chicken Meatballs with Cream Cheese",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Meat",
      imageUrl:
        "https://i.pinimg.com/736x/2c/00/75/2c00755bcff5fa5b883e2067f4b544fb.jpg",
      nutrition: {
        calories: "300 kcal",
        protein: "20g",
        fat: "18g",
      },
    },
    {
      title: "Fruity Pancake with Orange & Blueberry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Sweet",
      imageUrl:
        "https://i.pinimg.com/1200x/b4/39/0a/b4390ac3fd22de10baa02e8402dbe87a.jpg",
      nutrition: {
        calories: "250 kcal",
        protein: "6g",
        fat: "10g",
      },
    },
    {
      title: "The Best Easy One Pot Chicken and Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Snack",
      imageUrl:
        "https://i.pinimg.com/736x/f1/ee/d1/f1eed19e1ea89d779644f8ecb353d39f.jpg",
      nutrition: {
        calories: "400 kcal",
        protein: "25g",
        fat: "15g",
      },
    },
    {
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quaerat harum quae tempora eaque? Similique deserunt, quia obcaecati, explicabo ratione enim cumque quo ad maxime sit sed. Provident, ad itaque.",
      ingredients: "Oats, strawberries, honey, milk",
      instructions: "Mix and cook...",
      prepTime: "10 Minutes",
      cookTime: "15 Minutes",
      category: "Noodles",
      imageUrl:
        "https://i.pinimg.com/736x/96/9b/8e/969b8eb9e5ceb585789abe8c17d87c73.jpg",
      nutrition: {
        calories: "500 kcal",
        protein: "30g",
        fat: "25g",
      },
    },
  ]);

  console.log("recettes seedes avec succes, (9+ recettes)");
};
