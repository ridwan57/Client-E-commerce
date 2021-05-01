import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

import { getProducts, getProductsCount } from "../../functions/product";
import { showAverage } from "../../functions/ratings";
import { useProductsByPage } from "../../react-query/product";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";

const BestSellers = () => {
  const [page, setPage] = useState(1);
  const { loading, products } = useProductsByPage(page, "sold", "desc");
  const [productsCount, setProductsCount] = useState(0);
  const onChange = (page) => {
    // console.log('pagination', page)
    setPage(page);
  };

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 mb-4">
                {product && product.ratings && product.ratings.length > 0 ? (
                  showAverage(product)
                ) : (
                  <div className="text-center pt-2 pb-3 "> No rating yet</div>
                )}
                <ProductCard key={product._id} product={product} />
              </div>
            ))}
          </div>
        )}
        <div className="row">
          <nav className="col-md-4 offset-md-4 text-center pt-2 p-3">
            <Pagination
              onChange={onChange}
              // onShowSizeChange={onShowSizeChange}
              current={page}
              total={Math.ceil(productsCount / 3) * 10}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
