import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

export const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.value;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={6000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <h2>Sort by</h2>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">Price (Lowest First)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highest First)</label>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="../../../public/img/categoryimg.jpg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};
