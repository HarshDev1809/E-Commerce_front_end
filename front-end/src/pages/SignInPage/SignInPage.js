import { useNavigate } from "react-router-dom";
import { signInApi } from "../../api/auth";
import "./SignInPage.css"
import { useEffect, useState } from "react";

function SignInPage(){

    const [passWord, setPassWord] = useState();
    const [userName, setUserName] = useState();
    const [error,setError] = useState();

    const navigate = useNavigate();

    const userDetails = {
        userName : userName,
        passWord : passWord
    }

    const updateUserName = (e)=>{
        setUserName(e.target.value);
    }

    const updatePassWord = (e)=>{
        setPassWord(e.target.value);
    }

    const signIn = async(e) => {
        e.preventDefault();
        try{
            const {data} = await signInApi(userDetails)
            const {userName, accessToken} = data;
            localStorage.setItem("userName",userName);
            localStorage.setItem("token",accessToken);
            navigate("/");
        }catch(err){
            setError("Invalid ID or PASSWORD!");
        }

    }

    useEffect(()=>{
        setError();
    },[])


    return <div className="signin-page">
    <div className="header"><h1>Gehena</h1></div>
    <div className="page-section">
      <form className="signin-section" onSubmit={signIn}>
          <h4>Sign In</h4>
          <div className="id-div">
              <input type="text" placeholder="Username" value={userName} onChange={updateUserName}></input>
          </div>
          <div className="password-div">
              <input type="password" placeholder="Password" value={passWord} onChange={updatePassWord}></input>
          </div>
          <div className="error">
              {error}
          </div>
          <button type="submit">Sign In</button>
      </form>
      <div className="display-section">
          <h1>Gehena</h1>
          <h6>Home to Exquisite Jewellary</h6>
      </div>
    </div>
  </div>
}

export default SignInPage;