import { useEffect, useState } from "react";
import "./ProductDisplay.css";
import { addToCartApi, removeFromCartApi } from "../../api/products";
import Alert from "../SignInAlert/SignInAlert";
import { useNavigate } from "react-router-dom";


function ProductDisplay(props) {
  // console.log(props.product)
  // console.log(props.inCart)

  const [inCart,setInCart] = useState(props.inCart);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const productUid = props.product.uId;
  const productDetails = {
    id : productUid
  }

  const navigate = useNavigate();

  const addToCart = async ()=>{
    if(props.isSignin){
      const response = await addToCartApi(productDetails);
      setQuantity(quantity + 1);
      props.inCart.push(productUid);
      setShow(true)
      console.log(response);
    }else{
      alert("sign in");
    }
  }

  const checkQuantity = ()=>{
    let x = 0;
    for(let i = 0; i<props.inCart.length; i++){
      if(props.inCart[i] === productUid){
        x++;
      }
    }
    setQuantity(x);
    console.log(x);
  }

  const isInCart = ()=>{
    for(let i = 0; i<props.inCart.length; i++){
      if(props.inCart[i] === productUid){
        return true;
      }
    }
    return false
  }

  const removeFromCart = async ()=>{
    const response = await removeFromCartApi(productDetails);
    setQuantity(quantity-1);
    if(quantity-1 === 0){
      setShow(false);
    }
  }

  const goToProduct = ()=>{
    navigate(`/products/${productUid}`);
  }

  useEffect(()=>{
    setShow(isInCart());
    checkQuantity();
  },[])

  return (
    <div className="product-display">
      <div className="product-img" onClick={goToProduct}>
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
        <button type="button" onClick={addToCart}>Add to Cart</button>
        {show && (
                  <div>
                  <button type="button" onClick={removeFromCart}>-</button>
                  <input id="productQuantity" type="number" value={quantity}></input>
                  <button type="button" onClick={addToCart}>+</button>
                </div>
        )}
      </div>
    </div>
  );
}

export default ProductDisplay;
