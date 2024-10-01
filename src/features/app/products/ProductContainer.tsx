import { Col, Row } from "antd";

type ContainerProps = {
  paginatedItemsList: React.ReactNode[];
};
function ProductContainer({ paginatedItemsList }: ContainerProps) {
  return (
    <Row gutter={10}>
      {paginatedItemsList.map((el) => (
        <Col style={{ marginBottom: "30px" }} span={6}>
          {el}
        </Col>
      ))}
    </Row>
  );
}

export default ProductContainer;
