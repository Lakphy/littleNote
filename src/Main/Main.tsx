import React, { MouseEvent, useEffect, useState } from "react";
import { getJsonData } from "../api/getData";
import Detail from "../Detail/Detail";
import { min } from "../utils/compare";
import jsonData from "../notes.json";
import "./Main.scss";
import AutoResponsive from "autoresponsive-react";
import WaterFall from "../WaterFall/WaterFall";

type MainProps = React.FC<{}>;
const Main: MainProps = ({}) => {
  const [boxWidth, setBoxWidth] = useState(min(window.innerWidth, 1200)); // 屏幕宽度
  const [cardColumns, setCardColumns] = useState(2); // 卡片宽度
  const [cardWidth, setCardWidth] = useState(
    (min(window.innerWidth, 1200) - (cardColumns + 1) * 8) / cardColumns
  ); // 卡片宽度
  const [cardConfig, setCardConfig] = useState({
    left: 0,
    top: 0,
  });
  const [showingCardId, setShowingCardId] = useState(-1); // 正在展示卡片ID

  const handleDetail = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
    const target: any = e.target as any;
    target.className = "item big";
    target.style.width = boxWidth - 8;
    setCardConfig((prev) => {
      return {
        ...prev,
        left: -target.offsetLeft,
        top: -target.offsetTop,
      };
    });
    // target.style.transform = `translate(${-target.offsetLeft}px,${-target.offsetTop}px)`;
    setShowingCardId(target.id as number);
  }; // 点击卡片的回调函数

  const handleResize = (ev: WindowEventMap["resize"]) => {
    setBoxWidth(min(window.innerWidth, 1200));
    setCardWidth(
      (min(window.innerWidth, 1200) - (cardColumns + 1) * 8) / cardColumns
    );
  }; // 修改内容尺寸

  const getAutoResponsiveProps = () => {
    return {
      containerWidth: boxWidth - 8,
      transitionDuration: 0.5,
      gridWidth: boxWidth / 2,
      closeAnimation: true,
      itemClassName: "inner",
      itemMargin: 4,
    };
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // 监听
    return () => window.removeEventListener("resize", handleResize); // 销毁
  });
  useEffect(() => {
    console.log(showingCardId);
  }, [boxWidth, cardColumns, cardWidth, showingCardId]);
  return (
    <div
      className="Main"
      onClick={handleDetail}
      style={{ width: boxWidth - 8, margin: "0 auto" }}
    >
      <WaterFall
        columns={cardColumns}
        inner={jsonData.notes.map((item, index) => {
          return (
            <div
              className="item"
              id={String(item.id)}
              style={{
                width: item.id == showingCardId ? boxWidth : cardWidth,
                minHeight:
                  item.id == showingCardId ? window.screen.height : "1px",
                transform:
                  item.id == showingCardId
                    ? `translate(${cardConfig.left}px,${cardConfig.top}px)`
                    : `translate(${0}px,${0}px)`,
                transition: "all 0.6s ease-in-out",
              }}
            >
              {item.content}
            </div>
          );
        }, this)}
      ></WaterFall>
    </div>
  );
};
export default Main;
