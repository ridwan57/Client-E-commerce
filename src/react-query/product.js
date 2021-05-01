import { useQuery } from "react-query";
import { getProducts } from "../functions/product";
export const useProductsByPage = (page, sort = "createdAt", type = "asc") => {
  const { isLoading: loading, data: products = [] } = useQuery(
    ["products", sort, type, `${page}`],
    () => getProducts(sort, type, page).then((res) => res.data)
  );
  return { loading, products };
};
