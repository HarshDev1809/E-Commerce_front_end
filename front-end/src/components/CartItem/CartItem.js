import { useEffect, useState } from "react";
import "./CartItem.css";
import { getProductByIdApi } from "../../api/products";

function CartItem(props) {
  const { item } = props;
  const [product,setProduct] = useState()

//   const fetchProduct = async () => {
//     const { data } = await getProductByIdApi(item.uId);
//     console.log(data.productUrl);
//     setProduct(data);
//     console.log(product)
//     // console.log(product.productUrl);
//     // // console.log(product)
//     // myFunction(data);
//     // setProduct(data);
//   };

  useEffect(() => {
    // console.log(props);
    // fetchProduct()
    (async()=>{
        const response = await getProductByIdApi(item.uId);
        console.log(response.data);
        console.log(setProduct(response.data));
        console.log(product)
    })();
    
  }, []);
  return (
    <div className="cart-item">
      <div className="img-div">
        {/* <img src={product.productUrl} alt="product Image"/> */}
        {/* <p>{product.productUrl}</p> */}
      </div>
    </div>
  );
}

export default CartItem;
