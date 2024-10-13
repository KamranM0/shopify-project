import { Flex, Form, FormProps, Input, message, UploadFile } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../ui/CustomButton";
import UploadPicture from "../../ui/UploadPicture";
import {
  useGetOneCategoryQuery,
  useUpdateCategoryMutation,
} from "../../features/api/apiSlice";
import { CategoryFormTypes } from "../../types/category";

function CategoriesEditPage() {
  const [form] = Form.useForm();
  const [file, setFile] = useState<UploadFile<any> | null>(null);
  const { id } = useParams();
  const [updateCategory] = useUpdateCategoryMutation();

  const {
    data: oldCategoryData,
    error: oldCategoryError,
    isLoading: oldCategoryIsLoading,
  } = useGetOneCategoryQuery(id);

  const navigate = useNavigate();
  const onFinishFailed: FormProps<CategoryFormTypes>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  if (oldCategoryIsLoading) {
    return <div>Loading...</div>;
  }
  if (oldCategoryError) {
    return <div>Error</div>;
  }
  if (!oldCategoryData || !oldCategoryData.data)
    return <div>Old data does not exist.</div>;
  const handleFileChange = (file: UploadFile<any>) => {
    const fileObj = file;
    if (fileObj) setFile(fileObj);
  };
  const handleSubmit = async (values: CategoryFormTypes) => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (file) formData.append("image", file as unknown as File);

    try {
      const response = await updateCategory({ id, formData }).unwrap();
      console.log("catdim");
      console.log(response);

      if (response) {
        message.success("Category updated successfully!");
      }
    } catch (error) {
      message.error("Error updating category.");
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
          initialValue={oldCategoryData.data.name}
          label="Name"
          name={"name"}
        >
          <Input
            size="large"
            defaultValue={oldCategoryData.data.name}
            placeholder="user@test.com"
          ></Input>
        </Form.Item>
        <Form.Item required label="Image" name={"image"}>
          <UploadPicture handleFileChange={handleFileChange} />
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

export default CategoriesEditPage;
