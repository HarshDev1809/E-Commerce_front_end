import { useEffect, useState } from "react";
import "./ProductsArea.css";
import { getCartItemsApi, getProductsApi } from "../../api/products";
import Loader from "../Loader/Loader";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { verifyTokenApi } from "../../api/auth";
import { Tune } from "@mui/icons-material";
import CartFooter from "../CartFooter/CartFooter";

function ProductsArea() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isCart, setIsCart] = useState(false);
  let isSignIn2 = false;

  const fetchProducts = async () => {
    try {
      console.log("inside")
      await getProducts();
      await getCartItems();
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    const { data } = await getProductsApi();
    setProducts(data);
  };

  const getCartItems = async () => {
    console.log(isSignIn)
    if(isSignIn2){
      console.log("inside if")
      const { data } = await getCartItemsApi();
      if(data.length){
        setIsCart(true);
      }
      setCartItems(data);
    }else{
      setCartItems([]);
    }
  };

  const showProducts = (data) => {
    return (
      <div className="show-products">
        {data.map((product) => {
          // if (!cartItems.length) {
          //   return <ProductDisplay product={product} inCart={} />;
          // }

            // return <ProductDisplay product = {product} inCart = {cartItems.forEach((item) => {
              // console.log("inside if");
              // if (product.uId === item) {
              //   console.log("if");
              //   return <ProductDisplay product={product} inCart={true} />;
              // } else {
              //   console.log("else");
              //   return <ProductDisplay product={product} inCart={false} />;
              
            
            //   // }
            //   return product.uId === item;
            // })} />
            // console.log(cartItems)
            return <ProductDisplay product = {product} inCart = {cartItems} isSignIn = {isSignIn}/>
          }
        )}
        {isCart  && <CartFooter />}

      </div>
    );
  };

  const updateIsSignIn = async() =>{
    const response = await verifyTokenApi();

    if(response){
      setIsSignIn(true);
      isSignIn2 = true;
      console.log(isSignIn)
    }
    console.log(response)
    console.log(isSignIn)
  }

  const myFunction = async()=>{
    setIsloading(true);
    await updateIsSignIn();
    console.log(isSignIn);
    await fetchProducts();
  }

  useEffect(() => {
    myFunction();
    return () => {};
  }, []);

  return (
    <div className="products-area">
      {isLoading ? <Loader /> : showProducts(products)}
    </div>
  );
}

export default ProductsArea;