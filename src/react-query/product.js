import { Query } from "mongoose";
import { useQuery, QueryCache } from "react-query";
import { queryClient } from "..";
import { getCategories, getCategory } from "../functions/category";
import {
  getProduct,
  getProducts,
  getProductsByCount,
  getRelated,
} from "../functions/product";
import { getSub, getSubs } from "../functions/sub";

export const useProductsByPage = (page, sort = "createdAt", type = "asc") => {
  const { isLoading: loading, data: products = [] } = useQuery(
    ["products", sort, type, `${page}`],
    () => getProducts(sort, type, page).then((res) => res.data),
    {
      onSuccess: (products) => {
        for (const product of products) {
          console.log("product:", product);
          queryClient.setQueryData(["product", `${product.slug}`], product);
        }
      },
    }
  );
  return { loading, products };
};

export const useCategories = () => {
  const { isLoading: loading, data: categories = [] } = useQuery(
    ["categories"],
    () => getCategories().then((res) => res.data)
  );
  return { loading, categories };
};
export const useCategory = (slug) => {
  const {
    isLoading: loading,
    data: { category = {}, products = [] } = {},
  } = useQuery(["category", `${slug}`], () =>
    getCategory(slug).then((res) => res.data)
  );
  return { loading, category, products };
};

export const useSubs = () => {
  const { isLoading: loading, data: subs = [] } = useQuery(["subs"], () =>
    getSubs().then((res) => res.data)
  );
  return { loading, subs };
};
export const useSub = (slug) => {
  const {
    isLoading: loading,
    data: { sub = {}, products = [] } = {},
  } = useQuery(["sub", `${slug}`], () => getSub(slug).then((res) => res.data));
  return { loading, subs: sub, products };
};

export const useProductsByCount = () => {
  const { isLoading: loading, data: products = [] } = useQuery(
    ["productsByCount"],
    () => getProductsByCount(12).then((res) => res.data)
  );
  return { products };
};
export const useProduct = (slug) => {
  const { isLoading: loading, data: product = {} } = useQuery(
    ["product", `${slug}`],
    () => getProduct(slug).then((res) => res.data)
  );
  return { loading, product };
};
export const useRelated = (slug = "", productId = "") => {
  console.log('slug = "", productId:', slug, productId);
  const { isLoading: loading, data: relatedProduct = {} } = useQuery(
    ["relatedProduct", `${slug}`],
    () => getRelated(productId).then((res) => res.data)
  );
  return { loading, relatedProduct };
};
