import {
  Flex,
  Form,
  FormProps,
  Input,
  message,
  Select,
  UploadFile,
} from "antd";
import CustomButton from "../../ui/CustomButton";
import UploadPicture from "../../ui/UploadPicture";
import { useNavigate } from "react-router-dom";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../../features/api/apiSlice";
import { convertCategoriesToOptions } from "../../utils/helpers";
import { useState } from "react";
import { ProductFormTypes } from "../../types/product";
function ProductAddPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [file, setFile] = useState<UploadFile<any> | null>(null);
  const [createProduct] = useCreateProductMutation();
  const [form] = Form.useForm();
  const handleFileChange = (file: UploadFile<any>) => {
    const fileObj = file;
    if (fileObj) setFile(fileObj);
  };
  const navigate = useNavigate();
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useGetCategoriesQuery();
  if (categoryIsLoading) {
    return <div>Loading...</div>;
  }
  if (categoryError) {
    return <div>Error.</div>;
  }
  if (!categoryData || !categoryData.data)
    return (
      <div>
        There is no category. Add some categories before adding products.
      </div>
    );
  const categoriesArray = categoryData.data;
  const optionsArray = convertCategoriesToOptions(categoriesArray);
  const handleSubmit = async (values: ProductFormTypes["formInput"]) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", values?.name as string);
    formData.append("short_description", values?.short_description as string);
    formData.append("description", values?.long_description as string);
    formData.append("price", values?.price as unknown as string);
    formData.append("category_id", values?.category_id as unknown as string);
    if (file) {
      formData.append("image", file as unknown as File);
    }
    try {
      const response = await createProduct(formData).unwrap();
      console.log("catdim");
      console.log(response);

      if (response) {
        message.success("Product created successfully!");
        navigate(-1);
      }
    } catch (error) {
      message.error("Error creating product.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const onFinishFailed: FormProps<
    ProductFormTypes["formInput"]
  >["onFinishFailed"] = (errorInfo) => {
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
        onFinish={handleSubmit}
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
              message: "Please input the short product description.",
            },
          ]}
          label="Short description"
          name={"short_description"}
        >
          <Input size="large" placeholder="Coni"></Input>
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
          name={"category_id"}
        >
          <Select size="large" options={optionsArray} />
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

export default ProductAddPage;
