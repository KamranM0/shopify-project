import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
