import { Button, Col, Row } from "antd";
import WrappedCard from "../../../ui/WrappedCard";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../ui/CustomButton";

function PopularProducts() {
  const navigate = useNavigate();
  return (
    <Row
      style={{
        marginTop: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title level={1} style={{ color: "white" }}>
        Our popular products
      </Title>
      <Row gutter={20}>
        <Col>
          <WrappedCard />
        </Col>
        <Col>
          <WrappedCard />
        </Col>
        <Col>
          <WrappedCard />
        </Col>
        <Col>
          <WrappedCard />
        </Col>
      </Row>
      <CustomButton onClick={() => navigate("/products")} type="primary">
        View all
      </CustomButton>
    </Row>
  );
}

export default PopularProducts;
