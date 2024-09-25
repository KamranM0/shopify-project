import { Card, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

function WrappedCard() {
  return (
    <Card
      cover={<Image style={{ borderRadius: "10px" }} src="/product1.webp" />}
      style={{ width: "320px", border: "0px", borderRadius: "20px" }}
      styles={{
        body: {
          background: "transparent",
          color: "white",
          border: "0px",
          outline: "0px",
          borderRadius: "20px",
        },
        cover: { borderRadius: "20px" },
      }}
    >
      <Title level={2} style={{ color: "white" }}>
        Prime 3D Bottle
      </Title>
      <Paragraph style={{ color: "white" }}>$13.00</Paragraph>
    </Card>
  );
}

export default WrappedCard;
