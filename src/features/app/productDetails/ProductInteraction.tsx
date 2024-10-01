import { Flex, InputNumber } from "antd";
import CustomButton from "../../../ui/CustomButton";
import { HeartOutlined } from "@ant-design/icons";

function ProductInteraction() {
  return (
    <Flex>
      <InputNumber placeholder="0" min={1} max={10} size="large" />
      <CustomButton style={{ width: "400px", height: "100%" }} type="primary">
        Add to cart
      </CustomButton>
      <CustomButton style={{ height: "100%", width: "50px" }} type="secondary">
        <HeartOutlined style={{ fontSize: "24px" }} />
      </CustomButton>
    </Flex>
  );
}

export default ProductInteraction;
