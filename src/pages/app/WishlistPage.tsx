import { Flex, Row } from "antd";
import PageHeader from "../../ui/PageHeader";
import CustomButton from "../../ui/CustomButton";
import WishlistContainer from "../../features/app/wishlist/WishlistContainer";

function WishlistPage() {
  return (
    <Flex vertical gap={10}>
      <PageHeader>My wishlist</PageHeader>
      <Row justify={"end"}>
        <CustomButton type="secondary">Clear wishlist</CustomButton>
      </Row>
      <WishlistContainer />
    </Flex>
  );
}

export default WishlistPage;
