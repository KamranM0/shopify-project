import { Button, Input, Row, Space } from "antd";

function LandingField() {
  return (
    <Row
      style={{
        height: "85vh",
        backgroundImage: "url(/landingImg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      align={"bottom"}
    >
      <Input
        placeholder="Search"
        style={{
          width: "700px",
          height: "60px",
          padding: "0px",
          border: "0px",
        }}
        styles={{
          input: {
            background: "white",
            padding: "15px",
            fontSize: "20px",
            color: "black",
          },
          suffix: {
            background: "var(--color-primary)",
            border: "none",
            fontSize: "20px",
            height: "60px",
          },
        }}
        suffix={
          <Button
            type="primary"
            style={{
              background: "var(--color-primary)",
              border: "none",
              fontSize: "20px",
              height: "60px",
            }}
          >
            Generate
          </Button>
        }
      />
    </Row>
  );
}
export default LandingField;
