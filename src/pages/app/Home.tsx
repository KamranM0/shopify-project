import { Flex } from "antd";
import LandingField from "../../features/app/home/LandingField";
import PopularProducts from "../../features/app/home/PopularProducts";

function Home() {
  return (
    <Flex gap={"50px"} vertical align="center" justify="center">
      <LandingField />
      <PopularProducts />
    </Flex>
  );
}

export default Home;
