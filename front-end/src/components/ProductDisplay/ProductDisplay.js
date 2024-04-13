import { useEffect, useState } from "react";
import "./ProductDisplay.css";
import { addToCartApi, getCartItemsApi, removeFromCartApi } from "../../api/products";
import { useNavigate } from "react-router-dom";


function ProductDisplay(props) {
  // console.log(props.product)
  // console.log(props.inCart)
  // console.log(props)

  const [inCart,setInCart] = useState([]);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const productUid = props.product.uId;
  const [productDetails, setProductDetails] = useState();

  const navigate = useNavigate();

  const addToCart = async ()=>{
    console.log(props.isSignIn)
    if(props.isSignIn){
      const {data} = await addToCartApi({
        id : productUid,
        count : 1
      });
      console.log(data)
      for(let i = 0; i<data.length; i++){
        if(data[i].uId === productUid){
          console.log("inside")
          setQuantity(data[i].quantity);
          break
        }
      }
      // setQuantity(quantity + 1);
      // console.log(quantity)
      setShow(true)
      console.log(data);
      console.log(props);
    }else{
      alert("sign in");
    }
  }

  const checkQuantity = ()=>{
    // for(let i = 0 ; i<props.inCart.length; i++){
    //   if(props)
    // }
    console.log("1");
  }

  const isInCart = ()=>{
    // console.log(inCart)
    for(let i = 0; i < props.inCart.length; i++){
      if(props.inCart[i].uId === productUid){
        console.log("in if")
        console.log(props.inCart[i].quantity)
        setQuantity(props.inCart[i].quantity);
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

  const getCartItems = async () => {
    if(props.isSignIn){
      const { data } = await getCartItemsApi();
      setInCart(data)
    }else{
      setInCart([]);
    }
  };

  // const fetchCartItems = async()=>{

  // }

  const fetchProducts = async () => {
    try {
      // await getProducts();
      await getCartItems();
      // setIsloading(false);
      // setTimeout(()=>{
        setShow(isInCart())
        // console.log(show)
      // },3000);
    } catch (err) {
      console.log(err);
    }
  };

  const myFunction = async()=>{
    const response = await getCartItems()
    console.log(response);
    console.log(isInCart())
    setShow(isInCart());
    console.log(isInCart())
  }

  useEffect(()=>{
    console.log(props)
    // getCartItems()
    // setShow(isInCart());
    fetchProducts()
    // myFunction();
    // fetchCartItems();
    // checkQuantity();
    // setQuantity(productDetails.quantity)
    // console.log(props)
    return ()=> {}
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
