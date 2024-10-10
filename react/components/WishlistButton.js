import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./wishlist-btn.css";

const CSS_HANDLES = ["wishlistButtonContainer", "wishlistButtonText"];
const WishlistButton = ({ AddWishlistBtn }) => {
  const handles = useCssHandles(CSS_HANDLES);
  const handleClick = () => {
    const wishlistButton = document.querySelector(".wishlist-btn .vtex-button");
    wishlistButton && wishlistButton.click();
  };
  return (
    <div
      onClick={handleClick}
      className={`ba wishlist-btn ${handles.wishlistButtonContainer}`}
    >
      <AddWishlistBtn />
      <div className={`${handles.wishlistButtonText}`}>Add To Wishlist</div>
    </div>
  );
};

export default WishlistButton;
