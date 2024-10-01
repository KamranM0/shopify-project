import { Flex, Image, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import AdminProductsItem from "./AdminProductsItem";

function AdminProductsContainer() {
  return (
    <Flex vertical gap={10} style={{ padding: "10px" }}>
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
      <AdminProductsItem />
    </Flex>
  );
}

export default AdminProductsContainer;
