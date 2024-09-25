import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      layout={{ style: { color: "transparent" } }}
      theme={{
        token: {
          // Seed Token
          colorPrimary: "var(--color-primary)",
          borderRadius: 2,

          colorBgContainer: "var(--color-background)",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
