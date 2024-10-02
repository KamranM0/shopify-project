import { Card, Flex, Image } from "antd";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
type ItemProps = {
  item: { title: string; cover: string };
};
function AdminCategoriesItem({ item }: ItemProps) {
  return (
    <Card style={{ width: "280px" }} cover={<Image src={item.cover}></Image>}>
      <Flex justify="space-between" align="center">
        <Title style={{ margin: "0px" }} level={4}>
          {item.title}
        </Title>
        <CustomButton type="primary"> Edit</CustomButton>
      </Flex>
    </Card>
  );
}

export default AdminCategoriesItem;
