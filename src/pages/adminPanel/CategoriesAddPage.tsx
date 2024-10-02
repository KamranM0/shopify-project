import { Flex, Form, FormProps, Input } from "antd";
import CustomButton from "../../ui/CustomButton";
import UploadPicture from "../../ui/UploadPicture";
import { useNavigate } from "react-router-dom";
type FieldType = {
  name: string;
  image: string;
};
function CategoriesAddPage() {
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
            { required: true, message: "Please input the category name." },
          ]}
          label="Name"
          name={"name"}
        >
          <Input size="large" placeholder="user@test.com"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input the category image" },
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

export default CategoriesAddPage;
