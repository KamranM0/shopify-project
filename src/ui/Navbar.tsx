import { Button, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "transparent",
        alignItems: "center",
        padding: "50px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Space size="large" style={{ fontSize: "1.1rem" }}>
        <NavLink to="/" style={{ color: "white" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: "white" }}>
          About
        </NavLink>
        <NavLink to="/products" style={{ color: "white" }}>
          Shop
        </NavLink>
      </Space>
      <Link to="/">
        <Title
          style={{
            color: "white",
            margin: "0",
            marginRight: "120px",
          }}
        >
          <span style={{ color: "var(--color-primary)" }}>AI</span>-Max
        </Title>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Header>
  );
}

export default Navbar;
