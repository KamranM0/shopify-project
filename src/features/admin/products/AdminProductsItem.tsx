import { Flex, Image, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../api/apiSlice";
import { Product } from "../../../types/product";
type ItemProps = {
  item: Product & { category: string };
};

const styles = { title: { margin: 0 } };
function AdminProductsItem({ item }: ItemProps) {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = async () => await deleteProduct(item.product_id);
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
          src={item.image}
        ></Image>
        <Flex vertical gap={5}>
          <Title style={styles.title} level={5}>
            Price: ${item.price}
          </Title>
          <Paragraph style={styles.title}>Total sold: {231}</Paragraph>
        </Flex>
      </Space>
      <Flex vertical align="center">
        <Title style={styles.title} level={4}>
          {item.name}
        </Title>
        <Paragraph
          style={{ ...styles.title, color: "#ffffff34", fontWeight: "300" }}
        >
          {item.category}
        </Paragraph>
      </Flex>
      <Space style={{ margin: "10px" }}>
        <Link to={`edit/${item.product_id}`}>
          <CustomButton type="primary">Edit</CustomButton>
        </Link>
        <CustomButton type="secondary" onClick={handleDelete}>
          Delete
        </CustomButton>
      </Space>
    </Row>
  );
}

export default AdminProductsItem;
