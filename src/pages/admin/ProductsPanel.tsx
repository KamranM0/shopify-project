import { Dropdown, Flex, Input, InputNumber, Typography } from "antd";
import AdminPageHeader from "../../ui/AdminPageHeader";
import Paragraph from "antd/es/typography/Paragraph";
import CustomButton from "../../ui/CustomButton";
import { ArrowDownOutlined } from "@ant-design/icons";
import AdminProductsContainer from "../../features/admin/products/AdminProductsContainer";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import { convertCategoriesToOptions } from "../../utils/helpers";
const styles = {
  paragraph: { margin: "0px" },
};
function ProductsPanel() {
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useGetCategoriesQuery();

  if (categoriesIsLoading) {
    return <div>Loading...</div>;
  }
  if (categoriesError) {
    return <div>Error</div>;
  }
  const categoriesArray = categoriesData?.data;
  const categoryOptions = convertCategoriesToOptions(categoriesArray);

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
          <Dropdown trigger={["hover"]} menu={{ items: categoryOptions }}>
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
        <Link to={"add"}>
          <CustomButton style={{ marginRight: "10px" }} type="primary">
            Add product
          </CustomButton>
        </Link>
      </Flex>
      <AdminProductsContainer />
    </>
  );
}

export default ProductsPanel;
