import { Flex, Form, FormProps, Input } from "antd";
import CustomButton from "../../ui/CustomButton";
type FieldType = {
  email: string;
  username: string;
  password: string;
};
function RegisterPage() {
  const [form] = Form.useForm();
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
      style={{ height: "80vh", width: "100%" }}
    >
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
            { type: "email", message: "Please enter a valid email." },
            { required: true, message: "Please input your email!" },
          ]}
          label="Email"
          name={"email"}
        >
          <Input size="large" placeholder="user@test.com"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[{ required: true, message: "Please input your username!" }]}
          label="Username"
          name={"username"}
        >
          <Input size="large" placeholder="Coni"></Input>
        </Form.Item>
        <Form.Item
          required
          rules={[
            { required: true, message: "Please input your password!" },
            {
              min: 8,
              message: "Password should contain at least 8 characters.",
            },
          ]}
          label="Password"
          name={"password"}
        >
          <Input size="large" type="password" placeholder="user1234"></Input>
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" htmlType="submit">
            Register
          </CustomButton>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default RegisterPage;
