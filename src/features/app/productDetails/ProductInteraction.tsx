import { Flex, InputNumber, message } from "antd";
import CustomButton from "../../../ui/CustomButton";
import { HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddItemToCartMutation,
  useAddItemToWishlistMutation,
  useGetCartByUserIdQuery,
  useGetWishlistByUserIdQuery,
  useRemoveItemFromWishlistMutation,
  useUpdateQuantityOfItemMutation,
} from "../../api/apiSlice";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { CartItemType } from "../../../types/cart";
import { RootState } from "../../../store";
import { User } from "../../../types/user";
import { WishlistItemType } from "../../../types/wishlist";
type ProductInteractionProps = {
  product_id: string;
};

function ProductInteraction({ product_id }: ProductInteractionProps) {
  const [quantity, setQuantity] = useState<number | null>(1);
  const { user_id, isLoggedIn } = useSelector((state: RootState) => state.user);
  const [addItemToCart] = useAddItemToCartMutation();
  const [addItemToWishlist] = useAddItemToWishlistMutation();
  const [removeItemFromWishlist] = useRemoveItemFromWishlistMutation();
  const { data: wishListData, isLoading: wishListIsLoading } =
    useGetWishlistByUserIdQuery(user_id, {
      skip: !user_id,
    });
  let wishListItems: WishlistItemType[];
  if (
    !wishListData ||
    !wishListData.data ||
    !wishListData.data.wishlist_items
  ) {
    wishListItems = [];
  } else {
    wishListItems = wishListData.data.wishlist_items;
  }
  const isFavorite = wishListItems.find(
    (item) => item.product_id === product_id
  )
    ? true
    : false;

  const {
    data: cartData,
    isLoading: cartIsLoading,
    error: cartError,
  } = useGetCartByUserIdQuery(user_id, { skip: !user_id });
  const [updateQuantityOfItem] = useUpdateQuantityOfItemMutation();

  if (cartError) return <div>Some error occurred</div>;
  if (cartIsLoading) return <LoadingSpinner />;

  const cartItems = cartData?.data?.cart_items || [];
  const isCartEmpty = cartItems.length === 0;
  const existentItem = !isCartEmpty
    ? cartItems.find((el: CartItemType) => el.product_id === product_id)
    : false;
  const handleQuantity = (val: number | null) => {
    setQuantity(val);
  };
  const handleAddToWishList = async (e: any) => {
    e.stopPropagation();
    try {
      await addItemToWishlist({
        product_id: product_id,
        user_id: user_id,
      }).unwrap();
      message.success("Item added to wishlist successfully.");
    } catch (err: any) {
      message.error(err.data.message);
    }
  };
  const handleRemoveFromWishList = async (e: any) => {
    e.stopPropagation();
    try {
      await removeItemFromWishlist({
        product_id: product_id,
        user_id: user_id,
      }).unwrap();
      message.success("Item removed from wishlist successfully.");
    } catch (err: any) {
      message.error(err.data.message);
    }
  };
  const handleClick = isFavorite
    ? handleRemoveFromWishList
    : handleAddToWishList;
  const handleAddItemToCart = async () => {
    if (existentItem) {
      try {
        await updateQuantityOfItem({
          quantity,
          cart_item_id: existentItem.cart_item_id,
        }).unwrap();
        message.success("Item quantity updated.");
      } catch (err: any) {
        message.error(err.data.message);
      }
    } else {
      try {
        const addItemData = await addItemToCart({
          product_id,
          user_id,
          quantity,
        }).unwrap();
        message.success("Item added to cart.");
      } catch (err: any) {
        message.error(err.data.message);
      }
    }
  };

  return (
    <Flex>
      <InputNumber
        value={quantity}
        onChange={handleQuantity}
        placeholder="0"
        defaultValue={1}
        disabled={!isLoggedIn}
        min={1}
        size="large"
      />
      <CustomButton
        disabled={!isLoggedIn}
        style={{ width: "400px", height: "100%" }}
        type="primary"
        onClick={handleAddItemToCart}
      >
        Add to cart
      </CustomButton>
      <CustomButton
        disabled={!isLoggedIn}
        onClick={handleClick}
        style={
          isFavorite
            ? {
                background: "white",
                color: "var(--color-primary)",
                height: "100%",
                width: "50px",
              }
            : { height: "100%", width: "50px" }
        }
        type="secondary"
      >
        <HeartOutlined style={{ fontSize: "24px" }} />
      </CustomButton>
    </Flex>
  );
}

export default ProductInteraction;
