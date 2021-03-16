import React from "react";
import "./input.scss";

function Textarea({ className = "", label, ...rest }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <textarea className={"" + className} {...rest}/>
       
    </div>
  );
}

export default Textarea;
