import { Upload } from "antd";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { UploadChangeParam, UploadFile } from "antd/es/upload";

function UploadPicture() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleChange = (e: UploadChangeParam) => {
    setFileList(e.fileList);
  };

  return (
    <Upload
      action={"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"}
      maxCount={1}
      listType="picture"
      fileList={fileList}
      onChange={handleChange}
    >
      <CustomButton type="secondary">Upload</CustomButton>
    </Upload>
  );
}

export default UploadPicture;
