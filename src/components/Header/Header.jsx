import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h3>오늘 중간고사 시험은 💯</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    </>
  );
};
export default React.memo(Header);
