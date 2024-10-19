import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsServices";

export function useProducts() {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isPending };
}
