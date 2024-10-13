import { Button, ConfigProvider } from "antd";
import { MouseEventHandler } from "react";
type CustomButtonProps = {
  type: "secondary" | "primary";
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  htmlType?: "button" | "reset" | "submit";
  disabled?: boolean;
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
  disabled = false,
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
        disabled={disabled}
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
