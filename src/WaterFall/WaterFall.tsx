import React from "react";

type WaterFallProps = React.FC<{
  inner: Array<React.ReactNode>;
  columns: number;
}>;

const WaterFall: WaterFallProps = ({ inner, columns }) => {
  return (
    <div
      style={{
        columnCount: columns,
        columnGap: 0,
      }}
    >
      {inner}
    </div>
  );
};
export default WaterFall;
