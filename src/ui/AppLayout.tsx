import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartOutlined } from "@ant-design/icons";

function AppLayout() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cart = [
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
    { title: "The Prime 3D bottle", quantity: 2, price: 13, id: 1 },
    { title: "The Glory Team", quantity: 5, price: 12, id: 2 },
  ];
  const onSetCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
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
      <Content style={{ position: "relative" }}>
        <Outlet />
        <CartContainer
          cart={cart}
          onSetCartOpen={onSetCartOpen}
          isCartOpen={isCartOpen}
        />
        {!isCartOpen && (
          <CustomButton
            style={{
              position: "fixed",
              bottom: "0px",
              right: "0px",

              margin: "30px",
              borderRadius: "100px",
              fontSize: "40px",
              padding: "40px",
              width: "50px",
              height: "50px",
              zIndex: "1000",
            }}
            onClick={onSetCartOpen}
            type="secondary"
          >
            <ShoppingCartOutlined />
          </CustomButton>
        )}
      </Content>
    </Layout>
  );
}

export default AppLayout;
