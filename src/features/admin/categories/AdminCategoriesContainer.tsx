import { Flex } from "antd";
import AdminCategoriesItem from "./AdminCategoriesItem";
import { useGetCategoriesQuery } from "../../api/apiSlice";

function AdminCategoriesContainer() {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred.</div>;
  if (!data || !data.data) {
    return <div>There is no category.</div>;
  }
  const categories = data.data;
  return (
    <Flex align="center" justify="center" wrap gap={10}>
      {categories.map((el) => (
        <AdminCategoriesItem item={el} />
      ))}
    </Flex>
  );
}

export default AdminCategoriesContainer;
