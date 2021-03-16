import React from "react";
import Header from "./Header";
import "./layout.scss";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
}

export default AppLayout;
