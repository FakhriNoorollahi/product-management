import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts, getProductInfo } from "../services/productsServices";

export function useProducts(page, search, pageSearch) {
  const { data, isError, isFetching } = useQuery({
    queryKey: ["products", page, search, pageSearch],
    queryFn: () => getProducts(page, search, pageSearch),
    placeholderData: keepPreviousData,
  });

  return { data, isFetching, isError };
}

export function useProductInfo(id) {
  const { data, isPending } = useQuery({
    queryKey: ["products", id],
    queryFn: getProductInfo,
  });

  return { data, isPending };
}
