import {
  Dropdown,
  Flex,
  Input,
  InputNumber,
  MenuProps,
  Typography,
} from "antd";
import AdminPageHeader from "../../ui/AdminPageHeader";
import PageHeader from "../../ui/PageHeader";
import Paragraph from "antd/es/typography/Paragraph";
import CustomButton from "../../ui/CustomButton";
import { ArrowDownOutlined } from "@ant-design/icons";
import AdminProductsContainer from "../../features/admin/products/AdminProductsContainer";
const categories: MenuProps["items"] = [
  { key: "Graphical", label: "Graphical" },
  { key: "Chat bot", label: "Chat bot" },
];
const styles = {
  paragraph: { margin: "0px" },
};
function ProductsPanel() {
  return (
    <>
      <AdminPageHeader>Products</AdminPageHeader>
      <Flex align="center" justify="space-between">
        <Input.Search
          size="large"
          placeholder="Search..."
          style={{ width: "500px" }}
          styles={{}}
        />
        <Flex align="center">
          <Paragraph style={styles.paragraph}>Filtration</Paragraph>
          <Dropdown trigger={["hover"]} menu={{ items: categories }}>
            <Typography.Link>
              Categories <ArrowDownOutlined />
            </Typography.Link>
          </Dropdown>
          <Paragraph style={styles.paragraph}>Price range:</Paragraph>
          <InputNumber style={{ width: "70px", height: "100%" }} />
          <Paragraph
            style={{
              ...styles.paragraph,
              fontSize: "20px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            -
          </Paragraph>
          <InputNumber style={{ width: "70px", height: "100%" }} />
        </Flex>
        <Flex align="center">
          <Paragraph style={styles.paragraph}>Sort</Paragraph>
        </Flex>
        <CustomButton style={{ marginRight: "10px" }} type="primary">
          Add product
        </CustomButton>
      </Flex>
      <AdminProductsContainer />
    </>
  );
}

export default ProductsPanel;
