import { Flex, Image, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import { useState } from "react";
type ItemProps = {
  item: { title: string; price: number; img: string; category: string };
};
const styles = { title: { margin: 0 } };
function WishlistItem({ item }: ItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Row
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={
        !isHovered
          ? {
              background: "",
              height: "130px",
              borderRadius: "10px",
              alignItems: "center",
              transition: "ease-in-out 300ms",
            }
          : {
              background: "#792800",
              height: "130px",
              borderRadius: "10px",
              alignItems: "center",
            }
      }
      justify={"space-between"}
    >
      <Space size={"large"}>
        <Image
          style={{ height: "130px", borderRadius: "3px" }}
          src={item.img}
        ></Image>
        <Flex vertical gap={5}>
          <Title style={styles.title} level={3}>
            {item.title}
          </Title>
          <Title style={styles.title} level={2}>
            ${item.price}.00
          </Title>
        </Flex>
      </Space>
      <Flex vertical align="center">
        <Title
          level={2}
          style={{ ...styles.title, color: "#ffffff10", fontWeight: "600" }}
        >
          {item.category}
        </Title>
      </Flex>
      <Space style={{ margin: "10px" }}>
        <CustomButton style={{ height: "40px", width: "120px" }} type="primary">
          Add to cart
        </CustomButton>
        <CustomButton
          style={{ height: "40px", width: "70px" }}
          type="secondary"
        >
          Delete
        </CustomButton>
      </Space>
    </Row>
  );
}

export default WishlistItem;
