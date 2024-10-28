import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import RegisterFormPage from "../pages/RegisterFormPage";
import LoginFormPage from "../pages/LoginFormPage";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthProvider from "../provider/AuthProvider";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/auth">
            <Route index element={<Navigate to="register" />} />
            <Route path="register" element={<RegisterFormPage />} />
            <Route path="login" element={<LoginFormPage />} />
          </Route>
          <Route
            path="/products"
            element={
              <AuthProvider>
                <ProductsPage />
              </AuthProvider>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
