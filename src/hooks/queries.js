import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts, getProductInfo } from "../services/productsServices";

export function useProducts(page) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });
  console.log(isError, error);

  return { data, isPending, isError };
}

export function useProductInfo(id) {
  const { data, isPending } = useQuery({
    queryKey: ["products", id],
    queryFn: getProductInfo,
  });

  return { data, isPending };
}
