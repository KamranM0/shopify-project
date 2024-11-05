import { Card, Flex, Image, message } from "antd";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import { Link } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";
import { useDeleteCategoryMutation } from "../../api/apiSlice";
type ItemProps = {
  item: { name: string; image: string; category_id: string };
};
const styles = { Title: { margin: "0px" } };
function AdminCategoriesItem({ item }: ItemProps) {
  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDelete = async () => {
    try {
      await deleteCategory(item.category_id).unwrap();
      message.success("Category deleted successfully.");
    } catch (err: any) {
      message.error(err.data);
    }
  };
  return (
    <Card style={{ width: "280px" }} cover={<Image src={item.image}></Image>}>
      <Flex justify="space-between" align="center">
        <Title style={styles.Title} level={4}>
          {item.name}
        </Title>
        <Flex>
          <Link to={`edit/${item.category_id}`}>
            <CustomButton type="primary"> Edit</CustomButton>
          </Link>
          <CustomButton onClick={handleDelete} type="secondary">
            <DeleteFilled />
          </CustomButton>
        </Flex>
      </Flex>
    </Card>
  );
}

export default AdminCategoriesItem;
