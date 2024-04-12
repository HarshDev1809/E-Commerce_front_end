import axios from "axios";

export const signInApi = async (userDetaiils)=>{
    const response = await axios.post("http://localhost:8000/api/auth/signin",userDetaiils);
    return response
}

export const verifyTokenApi = async ()=>{
    const token = localStorage.getItem("token");
        const {data} = await axios.post("http://localhost:8000/api/auth/verify",{"token" : token});
        return data;
}