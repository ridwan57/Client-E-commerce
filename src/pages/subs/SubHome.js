import React, { useState, useEffect } from "react";
import ProductCard from "../../components/cards/ProductCard";
import { getSub } from "../../functions/sub";
import { useSubs, useSub } from "../../react-query/product";

const SubHome = ({ match }) => {
  const { slug } = match.params;
  const { loading, subs, products } = useSub(slug);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products.length > 0 ? (
                <>
                  {products.length} Products in {subs.name} Sub category{" "}
                </>
              ) : (
                <>No Product in this Sub category</>
              )}
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHome;
