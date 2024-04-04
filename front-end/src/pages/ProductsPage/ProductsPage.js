import NavBar from "../../components/NavBar/NavBar";
import ProductsArea from "../../components/ProductsArea/ProductsArea";
import SideBar from "../../components/SideBar/SideBar";
import "./ProductsPage.css"

function ProductsPage(){
    return <div className="product-page">
        <NavBar />
        <div className="page-section">
        <SideBar />
        <ProductsArea />
        </div>
    </div>
}

export default ProductsPage;