import "./CartPage.css";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { verifyTokenApi } from "../../api/auth";
import { getCartItemsApi } from "../../api/products";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import NotSignedIn from "../../components/NotSignedIn/NotSignedIn";
import { getProductByIdApi } from "../../api/products";

function CartPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const updateIsSignedIn = async () => {
    const isTrue = await verifyTokenApi();
    if (isTrue) {
      await updateCartItems();
    }
    setIsSignedIn(isTrue);
  };

  const updateCartItems = async () => {
    const { data } = await getCartItemsApi();
    console.log(data);
    setCartItems(data);
  };

  const showSignIn = () => {
    return (
      <div className="signed-in">
        {cartItems.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    );
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

  const showSignOut = () => {
    return (
      <div className="signed-out">
        <h1>Sign in to View Cart</h1>
        <button type="button" onClick={goToSignIn}>
          Sign In
        </button>
      </div>
    );
  };

  const cartPage = () => {
    return (
      <div className="cart-page">
        {cartItems.map((item) => {
          return <CartItem item={item}/>;
        })}
      </div>
    );
  };

  useEffect(() => {
    updateIsSignedIn();
  }, []);

  return (
    <div className="cart-page">
      <nav>
        <NavBar />
      </nav>
      <div className="page-section">
        {isSignedIn ? cartPage() : <NotSignedIn />}
      </div>
    </div>
  );
}

export default CartPage;
