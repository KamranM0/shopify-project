import { Drawer, Flex, Row, Space } from "antd";
import CartItem from "./CartItem";
import Title from "antd/es/typography/Title";
import CustomButton from "./CustomButton";

type CartContainerProps = {
  isCartOpen: boolean;
  onSetCartOpen: () => void;
  cart: { title: string; id: number; price: number; quantity: number }[];
};
function CartContainer({
  isCartOpen,
  onSetCartOpen,
  cart,
}: CartContainerProps) {
  return (
    <Drawer
      styles={{
        body: { padding: "0px" },
      }}
      style={{ background: "var(--color-background)" }}
      onClose={onSetCartOpen}
      title="cart"
      open={isCartOpen}
    >
      <Flex
        vertical
        gap={10}
        style={{ height: "100%" }}
        justify="space-between"
      >
        <Flex
          vertical
          gap={10}
          style={{ padding: "10px", overflowY: "scroll" }}
        >
          {cart.map((el) => (
            <CartItem el={el} />
          ))}
        </Flex>
        <Row
          style={{
            background: "",
            width: "100%",
            height: "40%",
            padding: "10px",
          }}
        >
          <Title level={2}>Total Price: 45$</Title>
          <Space>
            <CustomButton type="secondary" style={{ height: "50px" }}>
              Clear cart
            </CustomButton>
            <CustomButton
              type="primary"
              style={{ height: "50px", width: "150px" }}
            >
              Order
            </CustomButton>
          </Space>
        </Row>
      </Flex>
    </Drawer>
  );
}

export default CartContainer;
