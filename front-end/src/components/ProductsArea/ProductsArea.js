import { useEffect, useState } from "react";
import "./ProductsArea.css";
import { getProductsApi } from "../../api/products";
import Loader from "../Loader/Loader";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

function ProductsArea() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchProducts = async () => {
    const {data} = await getProductsApi();
    setIsloading(false);
    setProducts(data)
  };

  const showProducts = (data)=>{
    return <div className="show-products">
        {data.map((product)=>{
            return <ProductDisplay product = {product} />
        })}
    </div>
  }

  useEffect(() => {
    setIsloading(true);
    fetchProducts();
    return () => {};
  },[]);

  return <div className="products-area">
    {isLoading ? <Loader /> : showProducts(products)}
  </div>;
}

export default ProductsArea;
