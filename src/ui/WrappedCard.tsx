import { Card, Image, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { HeartOutlined, ShopOutlined } from "@ant-design/icons";
function WrappedCard() {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  const navigate = useNavigate();
  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      hoverable={true}
      bordered={false}
      onClick={() => navigate("/product")}
      cover={
        <>
          {isHovered ? (
            <>
              <CustomButton
                type="primary"
                style={{
                  position: "absolute",
                  zIndex: "1000",
                  width: "40px",
                  height: "40px",
                  right: "0px",
                  top: "140px",
                  marginRight: "10px",
                  border: "0px",
                  outline: "0px",
                  borderRadius: "15px",
                }}
              >
                <HeartOutlined />
              </CustomButton>
              <CustomButton
                style={{
                  position: "absolute",
                  zIndex: "1000",
                  width: "40px",
                  height: "40px",
                  right: "0px",
                  top: "200px",
                  marginRight: "10px",
                  border: "0px",
                  outline: "0px",
                  borderRadius: "15px",
                }}
                type="secondary"
              >
                <ShopOutlined />
              </CustomButton>
            </>
          ) : null}

          <Image
            style={{
              borderRadius: "20px",
              maxHeight: "400px",
              objectFit: "cover",
            }}
            src="/product1.webp"
          />
        </>
      }
      style={{ width: "350px", borderRadius: "20px" }}
      styles={{
        cover: { borderRadius: "20px" },
      }}
    >
      <Space size={"small"} direction="vertical">
        <Title
          level={2}
          style={
            !isHovered
              ? { color: "#ffffffb8", transition: "300ms ease-in" }
              : { color: "var(--color-primary)", transition: "300ms ease-in" }
          }
        >
          Prime 3D Bottle
        </Title>
        <Title>$13.00</Title>
      </Space>
    </Card>
  );
}

export default WrappedCard;
