import { InputNumber, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
type ItemProps = {
  el: { title: string; id: number; price: number; quantity: number };
};
const styles = {
  marginZero: { margin: "0px", padding: "0px" },
};
function CartItem({ el }: ItemProps) {
  const [isTitleHovered, setIsTitleHovered] = useState<boolean>(false);
  const handleHover = () => setIsTitleHovered(!isTitleHovered);
  return (
    <Row
      style={{ background: "#202020", padding: "15px", borderRadius: "10px" }}
      justify={"space-between"}
    >
      <Link to={`/products/${el.id}`} style={{ width: "40%" }}>
        <Title
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            ...styles.marginZero,
            color: `${isTitleHovered ? "var(--color-primary)" : "#E0E0E0"}`,
            transition: "ease 200ms",
          }}
          level={4}
        >
          {el.title}
        </Title>
      </Link>
      <Space>
        <InputNumber
          value={el.quantity}
          size="small"
          style={{ width: "60px", padding: "5px" }}
        />

        <Title level={4} style={styles.marginZero}>
          {el.price * el.quantity}$
        </Title>
      </Space>
      <Space>
        <CustomButton type="secondary">
          <DeleteOutlined />
        </CustomButton>
      </Space>
    </Row>
  );
}

export default CartItem;
