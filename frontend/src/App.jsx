import "./App.css";
import Category from "./components/category";
import RecipeDetail from "./components/detail";
import Featured from "./components/featured";
import Ingredients from "./components/ingredients";
import Recipes from "./components/recipes";

function App() {
  return (
    <>
      {/* <Featured />
      <Category />
      <Recipes /> */}
      <RecipeDetail/>
      <Ingredients/>
    </>
  );
}

export default App;
