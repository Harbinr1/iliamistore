import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.jsx";

const FeaturedProduct = ({ type }) => {

  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eismod tempor incididunt ut labore et dolor. Lorem Ipsum dolor sit
          amet conse ctetur adipisicing elit, sed do eismod tempor incididunt ut
          labore et dolor.
        </p>
      </div>
      <div className="bottom">
      {error ? "Something went wrong!" : (loading ? "loading" : data && data.map((item) => (<Card item={item} key={item.id} />)
      ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
