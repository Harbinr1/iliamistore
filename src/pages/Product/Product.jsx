import React, { useState } from "react";
import "./Product.scss";
import { addToCart } from "../../redux/cartReducer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              {console.log(
                "Image 1 URL:",
                import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
              )}
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              {console.log(
                "Image 2 URL:",
                import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
              )}
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>

            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              ></img>
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price"> {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=> dispatch(addToCart({
              id:data.id,
              title:data.attributes.title,
              desc:data.attributes.desc,
              price:data.attributes.price,
              img:data.attributes.img.data.attributes.url,
              quantity

            }))}>
              <ShoppingCartIcon />
              Add to cart
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                Add to wish list
              </div>
              <div className="item">
                <AccountBalanceWalletIcon />
                Add to compare
              </div>
            </div>

            <div className="info">
              <span>Vendor:Polo</span>
              <span>Product Type:T-shirt</span>
              <span>Tag:T-Shirt,Man,Top</span>
            </div>
            <hr />
            <div className="info">
              <span>Description</span>
              <hr />
              <span>Additional Information</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
