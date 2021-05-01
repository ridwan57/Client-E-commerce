import React, { useEffect, useState } from "react";
import { getProduct, getRelated, productStar } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProductCard from "../components/cards/ProductCard";
import { showAverage } from "../functions/ratings";
import { useProduct, useRelated } from "../react-query/product";

const Product = ({ match: { params } }) => {
  const { product } = useProduct(params.slug);
  console.log("product:", product);
  const { relatedProduct } = useRelated(product?.slug, product?._id);
  console.log("relatedProduct:", relatedProduct);
  const [rating, setRating] = useState();
  const { user } = useSelector((state) => ({ ...state }));

  const onStarClick = (rating) => {
    // console.log('rating:', rating)
    setRating(() => rating);
  };
  const onOkClick = () => {
    productStar(product._id, rating, user.token)
      .then((res) => {
        console.log(res.data);
        toast.success(`Rating updated: ${res.data}`);
        // loadSingleProduct()
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row pt-4 h-75">
        <SingleProduct
          product={product}
          onOkClick={onOkClick}
          onStarClick={onStarClick}
          rating={rating}
        />
      </div>
      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Product </h4>

          <div className="container">
            {/* {JSON.stringify(relatedProduct)} */}
            <div className="row">
              {relatedProduct && relatedProduct.length > 0
                ? relatedProduct.map((product) => (
                    <div key={product._id} className="col-md-4 mb-4">
                      {product &&
                      product.ratings &&
                      product.ratings.length > 0 ? (
                        showAverage(product)
                      ) : (
                        <div className="text-center pt-2 pb-3 ">
                          {" "}
                          No rating yet
                        </div>
                      )}
                      <ProductCard key={product._id} product={product} />
                    </div>
                  ))
                : "No Related Product"}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
