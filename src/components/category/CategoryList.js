import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";
import { useCategories } from "../../react-query/product";

const CategoryList = () => {
  const { loading, categories } = useCategories();

  const listCategories = () =>
    categories.map((category) => (
      <div
        className="col btn-block m-3 btn btn-outlined-primary btn-lg btn-raised"
        key={category._id}
      >
        <Link to={`/category/${category.slug}`}>{category.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row text-center">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : categories && categories.length > 0 ? (
          listCategories()
        ) : (
          "No category"
        )}
      </div>
    </div>
  );
};

export default CategoryList;
