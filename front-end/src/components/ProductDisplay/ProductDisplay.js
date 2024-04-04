import { useState } from "react";
import "./ProductDisplay.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductDisplay(props) {
  return (
    <div className="product-display">
      <div className="product-img">
        <img src={props.product.productUrl} alt="Product Image"></img>
      </div>
      <div className="title">{props.product.name}</div>
      <div className="price">
        <span>{props.product.displayPrice}</span>
        <span>
          <del>{props.product.price}</del>
        </span>
      </div>
      <div className="button-div">
        <button type="button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
