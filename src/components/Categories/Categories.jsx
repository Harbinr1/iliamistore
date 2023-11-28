import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col" >
      
        <div className="row">
          <img src="../../../public/img/row1bedroom.jpeg"></img>
          <button>
            <Link className="link" to="/products/1">Bedrooms</Link>
          </button>
        </div>
        <div className="row">
        <img src="../../../public/img/row2kitchen.jpg"></img>
          <button>
            <Link className="link" to="/products/1">Kitchen</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="../../../public/img/row4couch.jpg"></img>
          <button>
            <Link className="link" to="/products/1">Couch</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="../../../public/img/row3dresser.jpg"></img>
          <button>
            <Link className="link" to="/products/1">Dresser</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src="../../../public/img/row5chairs.jpg"></img>
          <button>
            <Link className="link" to="/products/1">Chairs</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img src="../../../public/img/row6diningtable.jpg"></img>
          <button>
            <Link className="link" to="/products/1">Dining Tables</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
