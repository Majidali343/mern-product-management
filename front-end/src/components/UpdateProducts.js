import React from "react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliverDate, setDeliverDate] = useState("");
  const [size, setSize] = useState("");
  const [stock, setStock] = useState("");
  const navigate =useNavigate();

  const param = useParams();

  useEffect(() => {
    updateproduct();
  }, []);

  const updateproduct = async () => {
    let result = await fetch(`http://localhost:5000/getproduct/${param.id}`);

    result = await result.json();

    setName(result.name);
    setPrice(result.price);
    setOrderDate(result.orderDate);
    setDeliverDate(result.deliverDate);
    setSize(result.size);
    setStock(result.stock);
  };

  const CollectData = async () => {
    console.log(name, price, orderDate, deliverDate, size, stock);
    let result = await fetch(`http://localhost:5000/update/${param.id}`, {
      method: "put",
      body: JSON.stringify({
        name,
        price,
        orderDate,
        deliverDate,
        size,
        stock,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate('/')
  };

  return (
    <>
      <h3>update product here</h3>
      <form>
        <input
          className="inputBox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name "
        />

        <input
          className="inputBox"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter the price "
        />

        <input
          className="inputBox"
          type="text"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          placeholder="Enter the orderdate "
        />

        <input
          className="inputBox"
          type="text"
          value={deliverDate}
          onChange={(e) => setDeliverDate(e.target.value)}
          placeholder="Enter the Deliverdate "
        />

        <input
          className="inputBox"
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Enter the size "
        />

        <input
          className="inputBox"
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter the stock "
        />

        <button onClick={CollectData} className="button" type="button">
          Update
        </button>
      </form>
    </>
  );
};

export default Updateproduct;
