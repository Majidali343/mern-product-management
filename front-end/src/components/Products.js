import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Products = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization: ` bearar${ JSON.parse(localStorage.getItem("token"))}`
      }
    }
    );

    result = await result.json();
    setProduct(result);
  };

  const deletproduct = async (id) => {
    const result = await fetch(`http://localhost:5000/delete/${id}`, {
      authorization: ` bearar${ JSON.parse(localStorage.getItem("token"))}`,
      method: "delete",
    });
    getproducts();
  };
  const searchproduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization: ` bearar${ JSON.parse(localStorage.getItem("token"))}`
        }
      });

      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getproducts();
    }
  };

  return (
    <div className="product-list">
      <h4>ProductList</h4>
      <input
        className="searchbox"
        type="text"
        placeholder="Search Product"
        onChange={searchproduct}
      />

      <ul>
        <li>Product no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Order Date</li>
        <li>Deliver Date</li>
        <li>Size</li>
        <li>Stock</li>
        <li>operation</li>
      </ul>

      {Product.length>0?  Product.map((item, index) => 
        <ul>
         
          <li>{index+1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.orderDate}</li>
          <li>{item.deliverDate}</li>
          <li>{item.size}</li>
          <li>{item.stock}</li>
          <li>
            <button
              onClick={() => {
                deletproduct(item._id);
              }}
            >
              Delete
            </button>
            <Link to={"/update/" + item._id}>UPDATE</Link>
          </li>
        </ul>
      ):<h2>NO Item Found</h2>

      }
    </div>
  );
};

export default Products;
