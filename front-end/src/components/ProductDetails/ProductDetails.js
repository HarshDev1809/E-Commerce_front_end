import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { addToCartApi, getCartItemsApi, getProductByIdApi } from "../../api/products";

function ProductDetails(props) {
  const { product } = props;
  const [show, setShow] = useState(false);
  const [bigImage, setBigImage] = useState(product.productUrl);
  const [showEnlargeImage, setShowEnlargeImage] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const setPrice = () => {
    if (product.displayPrice !== product.price) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const setQuantity = async () => {
    const { data } = await getCartItemsApi();
    let x = 0;
    for (let i = 0; i < data.length; i++) {
      if (product.uId === data[i]) {
        x++;
      }
    }
    if (x > 0) {
      setProductQuantity(x);
      setIsInCart(true);
    } else {
      setProductQuantity(1);
      setIsInCart(false);
    }
  };

  useEffect(() => {
    setPrice();
    setQuantity();
    console.log(product);
  }, []);

  const showDisplayPrice = () => {
    return (
      <div className="price-div">
        <span className="del-price">
          <del> ₹{product.price}</del>
        </span>
        <span className="display-price"> ₹{product.displayPrice}</span>
        <div>
          <span>Save ₹ {product.price - product.displayPrice}</span>
        </div>
      </div>
    );
  };

  const showOriginalPrice = () => {
    return (
      <div>
        <span> ₹ {product.price}</span>
      </div>
    );
  };

  const openImage = (e) => {
    setBigImage(e.target.src);
  };

  const toggleEnlargeImage = () => {
    setShowEnlargeImage(!showEnlargeImage);
  };

  const updateQuantity = async (e) => {
    const previousQuantity = productQuantity;
    setProductQuantity(e.target.value);
    if (isInCart) {
      for (let i = 0; i < productQuantity; i++){
        const response = await addToCartApi({id : product.uId});
        console.log(response);
      }
    }
  };

  const updateCart = () => {
    return true;
  };

  return (
    <div className="product-details">
      <div className="image-section">
        <div className="big-image">
          <img
            src={bigImage}
            alt="product image"
            onClick={toggleEnlargeImage}
          />
          {showEnlargeImage && (
            <div className="enlarge-image">
              <img src={bigImage} alt="opened Image" />
              <button
                type="button"
                className="close-btn"
                onClick={toggleEnlargeImage}
              >
                X
              </button>
            </div>
          )}
        </div>
        <div className="small-images">
          {product.productImages.map((image) => {
            return (
              <div className="img">
                <img src={`${image}`} alt="product image" onClick={openImage} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="information-section">
        <div className="product-name">
          <h1>{product.name}</h1>
        </div>

        {/* {setShow && (
                <div>{product.displayPrice}</div>
            )}
            <div>
            {setShow ? <del>{product.price}</del> : <span>{product.price}</span>}
            </div>
       */}
        {setShow ? showDisplayPrice() : showOriginalPrice()}

        <div>
          <button type="button">
            <span class="material-symbols-outlined">remove</span>
          </button>
          <input
            type="number"
            value={productQuantity}
            onChange={updateQuantity}
          ></input>
          <button type="button">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
        <div>
          <button type="button">
            <span class="material-symbols-outlined">add_shopping_cart</span>add
            to Cart
          </button>
          <button type="button">
            <span class="material-symbols-outlined">favorite</span>wishlist
          </button>
        </div>

        <div>
          <h6>product details</h6>
          <p>{product.description}</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
