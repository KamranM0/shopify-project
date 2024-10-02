import { Flex } from "antd";
import AdminCategoriesItem from "./AdminCategoriesItem";
const items = [
  { title: "Chat bot", cover: "/categories/chatai.png" },
  { title: "Art", cover: "/categories/art.jpg" },
  { title: "Finance", cover: "/categories/finance.jpg" },
  { title: "Health care", cover: "/categories/healthcare.jpg" },
  { title: "Chat bot", cover: "/categories/chatai.png" },
  { title: "Art", cover: "/categories/art.jpg" },
  { title: "Finance", cover: "/categories/finance.jpg" },
  { title: "Health care", cover: "/categories/healthcare.jpg" },
];
function AdminCategoriesContainer() {
  return (
    <Flex align="center" justify="center" wrap gap={10}>
      {items.map((el) => (
        <AdminCategoriesItem item={el} />
      ))}
    </Flex>
  );
}

export default AdminCategoriesContainer;
