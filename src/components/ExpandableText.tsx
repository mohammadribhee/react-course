import { useState } from "react";

interface Props {
  children: string;
  maxChart?: number;
}
const ExpandableText = ({ children, maxChart = 100 }: Props) => {
  const [text, setText] = useState("more");
  const [size, setSize] = useState(maxChart);

  const handelClick = () => {
    if (text === "more") {
      setText("less");
      setSize(children.length);
    } else {
      setText("more");
      setSize(maxChart);
    }
  };
  return (
    <div>
      {children.substring(0, size)}{" "}
      <button onClick={handelClick}>{text}</button>
    </div>
  );
};

export default ExpandableText;
