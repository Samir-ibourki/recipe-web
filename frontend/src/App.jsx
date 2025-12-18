import {  Route, Routes } from "react-router-dom";
import "./App.css";

import RecipeDetail from "./components/detail";
import Home from "./components/Home";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import RecipeForm from "./components/admin/RecipeForm";
import Header from "./components/Header";

function App() {
  return (
 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<RecipeForm />} />
          <Route path="edit/:id" element={<RecipeForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
