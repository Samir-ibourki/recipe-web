import "./App.css";
import Category from "./component/category";
import Featured from "./component/featured";
import Recipes from "./component/recipes";

function App() {
  return (
    <>
      <Featured />
      <Category />
      <Recipes/>
    </>
  );
}

export default App;
