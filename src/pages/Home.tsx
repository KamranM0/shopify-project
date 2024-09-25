import { Layout } from "antd";
import LandingField from "../features/home/LandingField";
import PopularProducts from "../features/home/PopularProducts";

function Home() {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        height: "100%",
        width: "100%",
        gap: "50px",
      }}
    >
      <LandingField />
      <PopularProducts />
    </Layout>
  );
}

export default Home;
