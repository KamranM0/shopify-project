import { Button, Input, Row } from "antd";

function LandingField() {
  return (
    <Row
      style={{
        height: "85vh",
        width: "700px",
        backgroundImage: "url(/landingImg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1000,
      }}
      align={"bottom"}
    >
      <Input
        size="large"
        placeholder="Search"
        style={{ width: "1000px", padding: "0px" }}
        styles={{
          input: {
            background: "white",
            padding: "15px",
            fontSize: "20px",
          },
        }}
        suffix={
          <Button
            type="primary"
            style={{
              background: "#FF6347",
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
