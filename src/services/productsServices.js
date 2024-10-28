import { api } from "./httpReq";

export const getProducts = async (page, search, pageSearch) => {
  if (search)
    return await api.get(
      `/products?${
        pageSearch > 1 && `page=${pageSearch}&`
      }limit=10&name=${search}`
    );

  return await api.get(`/products?page=${page}&limit=10&`);
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

export const deleteMultiProduct = async (data) => {
  console.log(data);
  if (!Array.isArray(data.ids)) {
    data = { ids: [data.ids] };
  }
  console.log(data);

  return await api.delete("/products", { data });
};
