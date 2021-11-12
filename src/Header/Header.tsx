import React from "react";

type HeaderProps = React.FC<{
  children?: React.ReactNode;
}>;
const Header: HeaderProps = ({ children }) => {
  return (
    <div className="Header">
      <h1>123</h1>
    </div>
  );
};
export default Header;
