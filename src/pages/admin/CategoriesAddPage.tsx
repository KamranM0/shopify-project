import { Flex, Form, FormProps, Input, message, UploadFile } from "antd";
import CustomButton from "../../ui/CustomButton";
import UploadPicture from "../../ui/UploadPicture";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCreateCategoryMutation } from "../../features/api/apiSlice";
import { CategoryFormTypes } from "../../types/category";

function CategoriesAddPage() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<UploadFile<any> | null>(null);
  const [createCategory] = useCreateCategoryMutation();
  const navigate = useNavigate();
  const onFinishFailed: FormProps<CategoryFormTypes>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleFileChange = (file: UploadFile<any>) => {
    const fileObj = file;
    if (fileObj) setFile(fileObj);
  };
  const handleSubmit = async (values: CategoryFormTypes) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", file as unknown as File);

    try {
      const response = await createCategory(formData).unwrap();
      console.log("catdim");
      console.log(response);

      if (response) {
        message.success("Category created successfully!");
        navigate(-1);
      }
    } catch (error) {
      message.error("Error creating category.");
    } finally {
      setIsSubmitting(false);
    }
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
        onFinish={handleSubmit}
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
        <Form.Item required label="Image" name={"image"}>
          <UploadPicture
            isSubmitting={isSubmitting}
            handleFileChange={handleFileChange}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton
            disabled={isSubmitting}
            type="primary"
            htmlType="submit"
          >
            Submit
          </CustomButton>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default CategoriesAddPage;
