import { Flex } from "antd";
import AdminProductsItem from "./AdminProductsItem";
import { useGetProductsQuery } from "../../api/apiSlice";

function AdminProductsContainer() {
  const {
    data: productsData,
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetProductsQuery();
  if (productsError) {
    return <div>Error</div>;
  }
  if (productsIsLoading) {
    return <div>Loading...</div>;
  }
  if (!productsData || productsData.data.length === 0) {
    return <div>Product do not exist.</div>;
  }
  console.log(productsData);
  const productsArray = productsData.data;
  const itemsArray = productsArray.map((el) => ({
    ...el,
    category: el.categories.name,
  }));
  return (
    <Flex vertical gap={10} style={{ padding: "10px" }}>
      {itemsArray.map((el) => (
        <AdminProductsItem item={el} />
      ))}
    </Flex>
  );
}

export default AdminProductsContainer;
