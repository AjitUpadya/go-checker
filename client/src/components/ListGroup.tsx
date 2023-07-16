import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem  }: Props) { 
  //state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className= {selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index)
            }}> {item} </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
