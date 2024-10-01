import { Flex, Input, Space, Form, FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../ui/CustomButton";
type FieldType = {
  email?: string;
  password?: string;
};
function LoginPage() {
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
  const navigateToRegister: () => void = () => {
    navigate("/register");
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
          tooltip={{ title: "Admin mail: admin@test.com" }}
        >
          <Input size="large" placeholder="admin@test.com"></Input>
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
          tooltip={{ title: "Admin password: admin123" }}
        >
          <Input size="large" type="password" placeholder="admin123"></Input>
        </Form.Item>
        <Form.Item>
          <CustomButton htmlType="submit" type="primary">
            Login
          </CustomButton>
          <CustomButton type="secondary" onClick={navigateToRegister}>
            Register
          </CustomButton>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default LoginPage;
