import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface prop {
  likeClick: () => void;
}
export const Like = ({ likeClick }: prop) => {
  const [click, SetClick] = useState(false);

  const toggle = () => {
    SetClick(!click);
    likeClick();
  };
  if (click) {
    return <AiFillHeart size={40} color="red" onClick={toggle} />;
  } else {
    return <AiOutlineHeart size={40} color="red" onClick={toggle} />;
  }
};
