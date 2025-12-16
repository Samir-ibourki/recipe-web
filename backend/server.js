import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
import recipeRoute from "./routes/recipeRoute.js";
const port = 3030;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoute);
import "./models/Recipe.js";
import { runRecipeSeeders } from "./seeders/recipeseeders.js";

sequelize
  .sync({ force: true })
  .then(async () => {
    await runRecipeSeeders();
    console.log("databased synced successfully !");
  })
  .catch((err) => {
    console.log("Error databased", err);
  });

app.listen(port, () => {
  console.log(`api recipe tourne sur http://localhost:${port}`);
});
