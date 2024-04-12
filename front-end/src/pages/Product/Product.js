import { useParams } from "react-router-dom";
import "./Product.css"
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { getProductByIdApi } from "../../api/products";
import Loader from "../../components/Loader/Loader";

function Product(){
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState()

    const getProduct = async()=>{
        const {data} = await getProductByIdApi(id);
        setProduct(data);
        setIsLoading(false);
        console.log(data);
    }

    useEffect(()=>{
        setIsLoading(true);
        getProduct();
    },[])
    return <div className="product">
        <NavBar />
        <div className="page-section">
            {isLoading ? <Loader/> : <ProductDetails product = {product}/>}
        </div>
    </div>
}

export default Product;