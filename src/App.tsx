import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/app/Home";
import ProductsPage from "./pages/app/ProductsPage";

import AdminLayout from "./ui/AdminLayout";
import ProductsPanel from "./pages/adminPanel/ProductsPanel";
import LoginPage from "./pages/app/LoginPage";
import ProductDetailsPage from "./pages/app/ProductDetailsPage";
import RegisterPage from "./pages/app/RegisterPage";
import DashboardPanel from "./pages/adminPanel/DashboardPanel";
import CategoriesPanel from "./pages/adminPanel/CategoriesPanel";
import OrdersPanel from "./pages/adminPanel/OrdersPanel";
import AnalyticsPanel from "./pages/adminPanel/AnalyticsPanel";
import SettingsPanel from "./pages/adminPanel/SettingsPanel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/product" element={<ProductDetailsPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPanel />}></Route>
          <Route path="products" element={<ProductsPanel />}></Route>
          <Route path="categories" element={<CategoriesPanel />}></Route>
          <Route path="orders" element={<OrdersPanel />}></Route>
          <Route path="analytics" element={<AnalyticsPanel />}></Route>
          <Route path="settings" element={<SettingsPanel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
