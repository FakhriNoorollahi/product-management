import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts, getProductInfo } from "../services/productsServices";

export function useProducts(page, search, pageSearch) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["products", page, search, pageSearch],
    queryFn: () => getProducts(page, search, pageSearch),
    placeholderData: keepPreviousData,
  });

  return { data, isPending, isError };
}

export function useProductInfo(id) {
  const { data, isPending } = useQuery({
    queryKey: ["products", id],
    queryFn: getProductInfo,
  });

  return { data, isPending };
}
