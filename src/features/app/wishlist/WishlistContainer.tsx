import { Divider, Flex } from "antd";
import WishlistItem from "./WishlistItem";

function WishlistContainer() {
  const items = [
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
    {
      title: "The Prime 3D Bottle",
      price: 13,
      img: "/product1.webp",
      category: "Graphical",
    },
  ];
  return (
    <Flex
      vertical
      gap={10}
      style={{ paddingRight: "10px", paddingLeft: "10px" }}
    >
      {items.map((item) => (
        <>
          <WishlistItem item={item} />
          <Divider
            style={{ borderColor: "#ffffff20", margin: "0px" }}
          ></Divider>
        </>
      ))}
    </Flex>
  );
}

export default WishlistContainer;
