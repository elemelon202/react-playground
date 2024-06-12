import React, { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Fransisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      <button className="btn btn-primary">Click</button>
    </div>
  );
};

export default Customer;
