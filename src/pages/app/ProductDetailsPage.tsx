import { Flex, Image } from "antd";
import PageHeader from "../../ui/PageHeader";
import ProductFeatures from "../../features/app/productDetails/ProductFeatures";
import ProductInteraction from "../../features/app/productDetails/ProductInteraction";
import ProductDetailedDescription from "../../features/app/productDetails/ProductDetailedDescription";
import ProductInformation from "../../features/app/productDetails/ProductInformation";
function ProductDetailsPage() {
  return (
    <Flex vertical gap={20}>
      <PageHeader>Product</PageHeader>
      <Flex>
        <Flex justify="center" style={{ width: "50%" }}>
          <Image style={{ height: "650px" }} src="/product1.webp" />
        </Flex>
        <Flex
          vertical
          gap={30}
          justify="center"
          style={{ width: "50%", background: "" }}
        >
          <ProductInformation
            productName="The Prime 3D Bottle"
            price={13}
            shortDescription="Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posue."
          />
          <ProductInteraction />
          <ProductFeatures
            feat1="2k high resolution"
            feat2="7 day free trial"
            feat3="Generate 200 images for free"
          />
        </Flex>
      </Flex>

      <ProductDetailedDescription
        text={[
          {
            title: "A New Technology To Create Images",
            paragraph: `Lectus sit amet est placerat in. Montes nascetur ridiculus mus mauris
          vitae. Volutpat lacus laoreet non curabitur gravida arcu. Vel
          fringilla est ullamcorper eget. Tempus quam pellentesque nec nam
          aliquam sem. Et netus et malesuada fames ac. Tristique senectus et
          netus et malesuada fames ac. Sit amet purus gravida quis blandit
          turpis cursus in. Pretium fusce id velit ut tortor pretium viverra
          suspendisse potenti. Sed lectus vestibulum mattis ullamcorper velit
          sed ullamcorper. Tellus id interdum velit laoreet id. Elit
          pellentesque habitant morbi tristique senectus et netus et malesuada.
          Bibendum enim facilisis gravida neque convallis a cras semper auctor.
          Pellentesque habitant morbi tristique senectus et netus. Elementum eu
          facilisis sed odio morbi quis commodo odio. Amet est placerat in
          egestas erat imperdiet sed euismod nisi.`,
          },
          {
            title: "Create Your Own Artificial Intelligence Images",
            paragraph: `Volutpat diam ut venenatis tellus in metus vulputate eu. Nullam
          vehicula ipsum a arcu. Sed viverra ipsum nunc aliquet bibendum. Elit
          eget gravida cum sociis natoque. Non quam lacus suspendisse faucibus
          interdum posuere lorem. Leo a diam sollicitudin tempor id eu nisl nunc
          mi. Venenatis cras sed felis eget. Mi bibendum neque egestas congue.
          Eros donec ac odio tempor orci dapibus. Sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Tellus id interdum velit laoreet
          id. Elit pellentesque habitant morbi tristique senectus et netus et
          malesuada. Bibendum enim facilisis gravida neque convallis a cras
          semper auctor. Pellentesque habitant morbi tristique senectus et
          netus. Amet est placerat in egestas erat imperdiet sed euismod nisi.
          Elementum eu facilisis sed odio morbi quis commodo odio.`,
          },
        ]}
      />
    </Flex>
  );
}

export default ProductDetailsPage;
