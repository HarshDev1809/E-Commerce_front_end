import axios from "axios";

export const getProductsApi = async ()=>{
        const response = await axios.get("http://localhost:8000/api/products");
        return response;
}