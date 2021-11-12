import React from "react";
import "./Detail.scss";

type DetailProps = React.FC<{
  id: number;
}>;
const Detail: DetailProps = ({ id }) => {
  return (
    <div className="Detail" id={String(id)}>
      <div
        className="inner"
        id={String(id)}
        style={{ transform: `translate(${0}px,${0}px)` }}
      ></div>
    </div>
  );
};
export default Detail;
