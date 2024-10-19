import { Navigate, Route, Routes } from "react-router-dom";
import RegisterFormPage from "./pages/RegisterFormPage";
import LoginFormPage from "./pages/LoginFormPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/auth">
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<RegisterFormPage />} />
          <Route path="login" element={<LoginFormPage />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
