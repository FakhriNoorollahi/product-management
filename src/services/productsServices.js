import { api } from "./httpReq";

export const getProducts = async () => {
  return await api.get("/products");
};

export const addProducts = async (product) => {
  return await api.post("/products", product);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/products/${id}`);
};

export const editeProduct = async ({ id, data }) => {
  console.log(data);

  return await api.put(`/products/${id}`, data);
};
