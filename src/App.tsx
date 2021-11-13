import Header from "./Header/Header";
import "./App.scss";
import Main from "./Main/Main";
import { useEffect, useState } from "react";
import { min } from "./utils/compare";

function App() {
  const [boxWidth, setBoxWidth] = useState(min(window.innerWidth, 1200)); // 屏幕宽度
  const handleResize = (ev: WindowEventMap["resize"]) => {
    setBoxWidth(min(window.innerWidth, 1200));
  }; // 修改屏幕尺寸
  useEffect(() => {
    window.addEventListener("resize", handleResize); // 监听
    return () => window.removeEventListener("resize", handleResize); // 销毁
  });
  return (
    <div className="App" style={{ width: boxWidth }}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
