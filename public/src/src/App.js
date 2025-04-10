import React, { useState } from "react";
import "./App.css";

const menu = [
  { name: "Poszarpany Bajgiel", price: 33 },
  { name: "Firmowy Bajgiel", price: 35 },
  { name: "Zebro w Bajglu", price: 45 },
  { name: "Czizbajgiel", price: 31 },
  { name: "Haloumi Bajgiel", price: 35 },
  { name: "Frytki", price: 10 },
  { name: "On Lemon", price: 10 }
];

export default function App() {
  const [order, setOrder] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [discountUsed, setDiscountUsed] = useState(false);

  const total = order.reduce((sum, item) => sum + item.price, 0);
  const finalTotal = total - discount;

  const addToOrder = (item) => setOrder([...order, item]);

  const applyDiscount = () => {
    if (!discountUsed) {
      setDiscount(10);
      setDiscountUsed(true);
    }
  };

  return (
    <div>
      <h1>Bajgiel na Kółkach</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} zł
            <button onClick={() => addToOrder(item)}>Dodaj</button>
          </li>
        ))}
      </ul>

      <h2>Zamówienie</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item.name} - {item.price} zł</li>
        ))}
      </ul>
      <p>Suma: {total} zł</p>
      <p>Rabat: {discount} zł</p>
      <p><strong>Do zapłaty: {finalTotal} zł</strong></p>
      {!discountUsed && <button onClick={applyDiscount}>Zastosuj rabat 10 zł</button>}
    </div>
  );
}
