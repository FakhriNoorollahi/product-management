import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <p>404</p>
      <p>صفحه ای که دنبالش بودید، پیدا نشد !</p>
      <NavLink to="/products">بریم به صفحه ی اصلی ؟</NavLink>
    </div>
  );
}

export default NotFoundPage;
