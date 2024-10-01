import { Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
type DescriptionProps = {
  text: { title: string; paragraph: string }[];
};
function ProductDetailedDescription({ text }: DescriptionProps) {
  return (
    <>
      <Title
        level={2}
        style={{ textAlign: "center", marginTop: "30px", padding: "0px" }}
      >
        Detailed description
      </Title>
      <Row>
        <Paragraph
          style={{ padding: "20px", fontSize: "18px", fontWeight: "300" }}
        >
          {text.map((el) => (
            <>
              <Title level={4}>{el.title}</Title> {el.paragraph}
            </>
          ))}
        </Paragraph>
      </Row>
    </>
  );
}

export default ProductDetailedDescription;
