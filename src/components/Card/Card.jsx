import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

// Card.jsx

const Card = ({ item }) => {
  if (!item || !item.attributes) {
    return null; // or handle the case when data is missing
  }

  const { isNew, title, price } = item.attributes;

  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          {isNew && <span>New Season</span>}
          <img src={`${import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes.url}`} className='mainImg' alt="Main Img" />
          <img src={`${import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes.url}`} className='secondImg' alt="Second Img" />
        </div>
        <h2>{title}</h2>
        <div className='prices'>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;


