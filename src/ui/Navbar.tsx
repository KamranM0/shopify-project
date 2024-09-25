import { Button, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";
// const items = [
//   {
//     key: "1",
//     label: (
//       <NavLink to="/" style={{ color: "white" }}>
//         Home
//       </NavLink>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <NavLink to="/about" style={{ color: "white" }}>
//         About
//       </NavLink>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <NavLink to="/shop" style={{ color: "white" }}>
//         Shop
//       </NavLink>
//     ),
//   },
// ];
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
      {/* <Menu
        style={{
          background: "transparent",
          fontSize: "1.1rem",
          flex: 1,
        }}
        items={items}
        mode="horizontal"
      /> */}
      <Space size="large" style={{ fontSize: "1.1rem" }}>
        <NavLink to="/" style={{ color: "white" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: "white" }}>
          About
        </NavLink>
        <NavLink to="/shop" style={{ color: "white" }}>
          Shop
        </NavLink>
      </Space>
      <Title
        style={{
          color: "white",
          alignSelf: "center",
          margin: "0",
          marginRight: "120px",
        }}
      >
        <span style={{ color: "var(--color-primary)" }}>AI</span>-Max
      </Title>
      <Button>Login</Button>
    </Header>
  );
}

export default Navbar;
