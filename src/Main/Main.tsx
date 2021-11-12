import React, { MouseEvent } from "react";
import Detail from "../Detail/Detail";
import "./Main.scss";

type MainProps = React.FC<{}>;
const Main: MainProps = ({}) => {
  const handleDetail = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
    const target: any = e.target as any;
    target.className = "inner big";
    target.style.transform = `translate(${-target.offsetLeft}px,${-target.offsetTop}px)`;
  };
  return (
    <div className="Main" onClick={handleDetail}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <Detail id={index}></Detail>;
      })}
    </div>
  );
};
export default Main;
