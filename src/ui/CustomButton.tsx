import { Button, ConfigProvider } from "antd";
import { Color } from "antd/es/color-picker";
import { Children, MouseEventHandler } from "react";
type CustomButtonProps = {
  type: "secondary" | "primary";
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  htmlType?: "button" | "reset" | "submit";
};
const styleObj = {
  primary: {},
  secondary: { border: "0px" },
};
function CustomButton({
  type,
  style,
  children,
  onClick,
  htmlType,
}: CustomButtonProps) {
  const combinedStyle = style
    ? { ...styleObj[type], ...style }
    : styleObj[type];
  const designToken =
    type === "secondary"
      ? {
          defaultColor: "white",
          defaultBg: "var(--color-secondary)",
          defaultHoverBg: "var(--color-primary)",
          defaultHoverColor: "white",
        }
      : {};
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: designToken,
        },
      }}
    >
      <Button
        htmlType={htmlType}
        onClick={onClick}
        style={combinedStyle}
        type={"default"}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
}

export default CustomButton;
