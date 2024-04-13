import { useNavigate } from "react-router-dom";
import "./CartFooter.css"

function CartFooter(){

    const navigate = useNavigate();

    const goToCart = ()=>{
        navigate("/cart");
    }

return <div className="cart-footer">
    <button onClick={goToCart}>Go To Cart</button>
</div>
}

export default CartFooter;