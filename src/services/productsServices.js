import { api } from "./httpReq";

export const getProducts = async () => {
  return await api.get("/products");
};

export const getProductInfo = async ({ queryKey }) => {
  return await api.get(`/products/${queryKey[1]}`);
};

export const addProducts = async (product) => {
  return await api.post("/products", product);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/products/${id}`);
};

export const editeProduct = async ({ id, data }) => {
  return await api.put(`/products/${id}`, data);
};

export const deleteMultiProduct = async (ids) => {
  console.log(ids);

  return await api.delete(`/products`, ids);
};
