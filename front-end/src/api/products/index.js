import axios from "axios";

export const getProductsApi = async () => {
  const response = await axios.get("http://localhost:8000/api/products");
  return response;
};

export const getCartItemsApi = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    "http://localhost:8000/api/products/cart/items",
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return response;
};

export const addToCartApi = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    "http://localhost:8000/api/products/cart/add",
    id,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return response;
};

export const removeFromCartApi = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    "http://localhost:8000/api/products/cart/remove",
    id,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return response;
};

export const getProductByIdApi = async (id) => {
  const response = await axios.get(`http://localhost:8000/api/products/${id}`);
  return response;
};
