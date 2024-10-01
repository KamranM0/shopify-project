import { Flex, Image, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
const item = {
  title: "The Prime 3D Bottle",
  price: 13,
  soldAmount: 213,
  img: "/product1.webp",
  category: "Graphical",
};
const styles = { title: { margin: 0 } };
function AdminProductsItem() {
  return (
    <Row
      style={{
        background: "#202020",
        height: "90px",
        borderRadius: "10px",
        alignItems: "center",
      }}
      justify={"space-between"}
    >
      <Space>
        <Image
          style={{ height: "90px", width: "80px", borderRadius: "10px" }}
          src={item.img}
        ></Image>
        <Flex vertical gap={5}>
          <Title style={styles.title} level={5}>
            Price: ${item.price}
          </Title>
          <Paragraph style={styles.title}>
            Total sold: {item.soldAmount}
          </Paragraph>
        </Flex>
      </Space>
      <Flex vertical align="center">
        <Title style={styles.title} level={4}>
          {item.title}
        </Title>
        <Paragraph
          style={{ ...styles.title, color: "#ffffff34", fontWeight: "300" }}
        >
          {item.category}
        </Paragraph>
      </Flex>
      <Space style={{ margin: "10px" }}>
        <CustomButton type="primary">Edit</CustomButton>
        <CustomButton type="secondary">Delete</CustomButton>
      </Space>
    </Row>
  );
}

export default AdminProductsItem;
