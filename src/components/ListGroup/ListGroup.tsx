import React, { useState } from "react";

//interface works like a class/schema to decide what kind of info gets passed into the component
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  //Hook
  //useState returns an array, [0] is the thing to be changed, [1] is the function to do the changing
  const [selectedIndex, setSelectedIndex] = useState(-1); //no item is selected, 0 means first item is selected

  // with the && operator here,
  //if the first statement is true,
  //the second will be rendered,
  //or nothing will be rendered and the boolean false will be returned
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            key={item}
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(i); // call the setSelected index function and give the selectedIndex a new value of i (or index in this case)
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
