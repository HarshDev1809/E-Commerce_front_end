import { useNavigate } from "react-router-dom";
import "./NotSignedIn.css";

function NotSignedIn() {
    const navigate = useNavigate();

    const goToSignIn = ()=>{
        navigate("/signin")
    }
  return (
    <div className="not-signed-in">
      <h1>Sign in to Continue</h1>
      <button type="button" onClick={goToSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default NotSignedIn;
