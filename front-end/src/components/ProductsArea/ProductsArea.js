import { useEffect, useState } from "react";
import "./ProductsArea.css";
import { getCartItemsApi, getProductsApi } from "../../api/products";
import Loader from "../Loader/Loader";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { verifyTokenApi } from "../../api/auth";

function ProductsArea() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isSignIn, setIsSignIn] = useState();

  const fetchProducts = async () => {
    try {
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
    if(isSignIn){
      const { data } = await getCartItemsApi();
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
            return <ProductDisplay product = {product} inCart = {cartItems} isSignIn = {isSignIn}/>
          }
        )}

      </div>
    );
  };

  const updateIsSignIn = async() =>{
    const response = await verifyTokenApi();
    setIsSignIn(response);
  }

  useEffect(() => {
    setIsloading(true);
    fetchProducts();
    console.log(verifyTokenApi())
    updateIsSignIn();
    
    return () => {};
  }, []);

  return (
    <div className="products-area">
      {isLoading ? <Loader /> : showProducts(products)}
    </div>
  );
}

export default ProductsArea;
