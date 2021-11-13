import React from "react";
import "./Detail.scss";

type DetailProps = React.FC<{
  id: number;
  width: number;
  style: any;
  className: string;
  content: string;
}>;
const Detail: DetailProps = ({ id, width, style, content }) => {
  return (
    <div
      className="inner unsplash-obj"
      id={String(id)}
      style={{ width: style.width }}
    >
      {content}
    </div>
  );
};
export default Detail;
