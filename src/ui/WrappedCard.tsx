import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function WrappedCard() {
  return (
    <Card
      style={{ width: "300px", height: "500px" }}
      styles={{
        body: { background: "white" },
        cover: { background: "red" },
      }}
    >
      salam
    </Card>
  );
}

export default WrappedCard;
