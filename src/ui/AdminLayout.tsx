import { Divider, Layout, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/typography/Title";
import CustomButton from "./CustomButton";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useLocale } from "antd/es/locale";
import AdminSidebar from "../features/admin/layout/AdminSidebar";

function AdminLayout() {
  const location = useLocation();
  const selectedMenuItem = location.pathname.split("/").slice(-1)[0];
  return (
    <Layout
      style={{
        height: "100vh",
        background: "var(--color-background)",
      }}
    >
      <AdminSidebar selectedMenuItem={selectedMenuItem} />
      <Layout style={{ background: "var(--color-background)" }}>
        <Header style={{ background: "var(--color-primary)" }}>Header</Header>
        <Content style={{ overflowY: "scroll" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
