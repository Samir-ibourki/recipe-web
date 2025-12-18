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
        "This roasted salmon dish is bursting with fresh flavors. The zesty lime and aromatic ginger create a perfect harmony with the rich salmon. It's a quick, healthy dinner option that feels gourmet but takes minimal effort to prepare. Perfect for weeknights or special occasions.",
      ingredients: [
        {
          title: "For the Salmon",
          items: [
            "1.5 lb Salmon fillet, wild-caught preferred",
            "2 tbsp Olive oil",
            "1 tsp Sea salt",
            "1/2 tsp Black pepper",
            "3 slices Fresh lime"
          ],
        },
        {
          title: "Ginger Lime Sauce",
          items: [
            "2 tbsp Soy sauce or Tamari",
            "1 tbsp Fresh ginger, grated",
            "1 clove Garlic, minced",
            "1 tbsp Honey or Maple syrup",
            "1 tsp Sesame oil",
            "1 tbsp Fresh cilantro, chopped"
          ],
        },
      ],
      instructions: [
        {
          step: 1,
          text: "Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper for easy cleanup.",
        },
        {
          step: 2,
          text: "Place the salmon fillet on the baking sheet. Rub with olive oil and season generously with salt and pepper. Arrange fresh lime slices on top.",
        },
        {
          step: 3,
          text: "Roast in the preheated oven for 12-15 minutes, or until the salmon is opaque and flakes easily with a fork.",
        },
        {
           step: 4,
           text: "While the salmon cooks, whisk together the soy sauce, grated ginger, minced garlic, honey, and sesame oil in a small bowl."
        },
        {
           step: 5,
           text: "Drizzle the sauce over the baked salmon just before serving and garnish with fresh cilantro."
        }
      ],
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
        "Start your morning right with these fluffy, heart-healthy oatmeal pancakes. Loaded with fresh strawberries and drizzled with sweet honey, they are a delicious guilt-free treat. Great for a Sunday brunch or a quick weekday breakfast.",
      ingredients: [
         "1 cup Oat flour (blended oats)",
         "1/2 cup Greek yogurt",
         "1 Large Egg",
         "1/2 tsp Baking powder",
         "1/4 cup Almond milk",
         "1/2 cup Fresh strawberries, sliced",
         "1 tbsp Honey for topping"
      ],
      instructions: [
        {
          step: 1,
          text: "In a blender, grind rolled oats until they form a fine flour-like consistency.",
        },
        {
          step: 2,
          text: "In a mixing bowl, combine oat flour, baking powder, Greek yogurt, egg, and almond milk. Whisk until a smooth batter forms. Let it sit for 5 minutes.",
        },
        {
          step: 3,
          text: "Heat a non-stick pan over medium heat and lightly grease with butter or oil.",
        },
        {
          step: 4,
          text: "Pour 1/4 cup of batter onto the pan. Place strawberry slices on top of the wet batter. Cook until bubbles form, then flip and cook for another 2 minutes.",
        },
        {
          step: 5,
          text: "Serve warm, stacked high, and drizzled with honey or maple syrup."
        }
      ],
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
        "A vibrant and crunchy salad that combines fresh vegetables with a creamy, light mayonnaise dressing. It's the perfect side dish for any meal or a light lunch on its own.",
      ingredients: [
          "2 cups Mixed greens (lettuce, spinach)",
          "1 Cucumber, diced",
          "1 cup Cherry tomatoes, halved",
          "1/2 Red onion, thinly sliced",
          "1/4 cup Light mayonnaise",
          "1 tsp Lemon juice",
          "Salt and Pepper to taste"
      ],
      instructions: [
        {
          step: 1,
          text: "Thoroughly wash and dry the mixed greens and vegetables.",
        },
        {
           step: 2,
           text: "In a large salad bowl, combine the greens, cucumber, tomatoes, and red onion."
        },
        {
           step: 3,
           text: "In a small cup, mix the mayonnaise with lemon juice, salt, and pepper to create the dressing."
        },
        {
           step: 4,
           text: "Pour the dressing over the salad and toss gently to coat evenly. Serve immediately."
        }
      ],
      prepTime: "10 Minutes",
      cookTime: "0 Minutes",
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
        "Tender chicken meatballs filled with a surprise center of melted cream cheese. These savory bites are perfect as an appetizer or served over pasta for a comforting main course.",
      ingredients: [
         {
            title: "Meatballs",
            items: [
               "1 lb Ground chicken",
               "1/2 cup Breadcrumbs",
               "1 Egg",
               "1 tsp Garlic powder",
               "1/2 tsp Onion powder",
               "Salt and Pepper"
            ]
         },
         {
            title: "Filling & Sauce",
            items: [
               "4 oz Cream cheese, cut into small cubes",
               "1 cup Marinara sauce",
               "Fresh basil for garnish"
            ]
         }
      ],
      instructions: [
        {
           step: 1,
           text: "Preheat oven to 375°F (190°C)."
        },
        {
           step: 2,
           text: "In a bowl, mix ground chicken, breadcrumbs, egg, garlic powder, onion powder, salt, and pepper."
        },
        {
           step: 3,
           text: "Take a spoonful of the meat mixture, flatten it, place a cube of cream cheese in the center, and seal the meat around it to form a ball."
        },
        {
           step: 4,
           text: "Place meatballs on a baking sheet and bake for 20-25 minutes until cooked through."
        },
        {
           step: 5,
           text: "Simmer marinara sauce in a pan, add cooked meatballs to coat, and serve hot garnished with basil."
        }
      ],
      prepTime: "20 Minutes",
      cookTime: "25 Minutes",
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
