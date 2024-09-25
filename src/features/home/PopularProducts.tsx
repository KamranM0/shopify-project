import { Col, Row } from "antd";
import WrappedCard from "../../ui/WrappedCard";
import Title from "antd/es/typography/Title";

function PopularProducts() {
  return (
    <Row style={{ marginTop: "20px" }} align="stretch">
      <Title level={1} style={{ color: "white" }}>
        Our popular products
      </Title>
      <Row gutter={50}>
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
    </Row>
  );
}

export default PopularProducts;
