import { useEffect } from "react";
import "./CartItem.css"

function CartItem(props){
    const {item} = props
    useEffect(()=>{
        console.log(props);
    },[])
    return <div className="cart-item">
        <div className="img-div">
        </div>
    </div>
}

export default CartItem;