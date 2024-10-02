import { Flex, Form, FormProps, Input, Select } from "antd";
import CustomButton from "../../ui/CustomButton";
import UploadPicture from "../../ui/UploadPicture";
import { useNavigate } from "react-router-dom";
type FieldType = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
};
const options = [
  { label: "Art", value: "art" },
  { label: "Chat Bot", value: "chatbot" },
  { label: "Finance", value: "finance" },
  { label: "Health care", value: "healthcare" },
];
function ProductAddPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100%", width: "100%", position: "relative" }}
    >
      <CustomButton
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          margin: "20px",
        }}
        type="primary"
        onClick={() => navigate(-1)}
      >
        Back
      </CustomButton>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{ width: "500px" }}
        form={form}
      >
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input the product name." },
          ]}
          label="Name"
          name={"name"}
        >
          <Input size="large" placeholder="user@test.com"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[
            {
              required: true,
              message: "Please input the product description.",
            },
          ]}
          label="Description"
          name={"description"}
        >
          <Input size="large" placeholder="Coni"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input the product price" },
          ]}
          label="Price"
          name={"price"}
        >
          <Input size="large" type="number" placeholder="user1234"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input the product category" },
          ]}
          label="Category"
          name={"category"}
        >
          <Select size="large" options={options} />
        </Form.Item>
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input the product image" },
          ]}
          label="Image"
          name={"image"}
        >
          <UploadPicture />
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" htmlType="submit">
            Submit
          </CustomButton>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default ProductAddPage;
