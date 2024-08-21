import { Route, Routes } from "react-router-dom";

import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Layout from "./components/Layout/layout";
import ProductSingel from "./components/ProductSingel";
import CategoryList from "./components/CategoryList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";

import PostProductPage from "./pages/PostProductPage";
import ProductSelectByIdPage from "./pages/ProductSelectByIdPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Ecommerce />} />
        <Route path=":id" element={<ProductSingel />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="product">
          <Route path=":id" element={<ProductSelectByIdPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="postProduct" element={<PostProductPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="category">
          <Route path=":categoryId" element={<CategoryList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
