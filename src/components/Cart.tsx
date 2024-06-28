import React from "react";

interface Props {
  Items: string[];
  onClear: () => void;
}

const Cart = ({ Items, onClear }: Props) => {
  return (
    <>
      <ul>
        Cart
        {Items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </>
  );
};

export default Cart;
