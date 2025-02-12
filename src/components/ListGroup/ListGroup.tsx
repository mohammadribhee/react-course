import { useState } from "react";
import style from './ListGroup.module.css';
import appStyle from '../../App.module.css';
import styled from "styled-components";

const List= styled.ul`
list-style: none;
padding: 0;
`

interface ListItemPrpos{
  active:boolean;
}

const ListItem= styled.li<ListItemPrpos>`

padding: 5px 0;
background-color:${Props=>Props.active?'blue':'none'}
`
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
          active={index===selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
   <div className="list-none p-0"></div>
    </>
  );
}

export default ListGroup;
