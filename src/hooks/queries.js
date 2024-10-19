import { useQuery } from "@tanstack/react-query";
import { getProductInfo, getProducts } from "../services/productsServices";

export function useProducts() {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isPending };
}

export function useProductInfo(id) {
  const { data, isPending } = useQuery({
    queryKey: ["products", id],
    queryFn: getProductInfo,
  });

  return { data, isPending };
}
