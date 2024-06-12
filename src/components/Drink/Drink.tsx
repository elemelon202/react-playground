import React, { useState } from "react";

const Drink = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 7 });
  };

  return (
    <div>
      {drink.price}
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Drink;
