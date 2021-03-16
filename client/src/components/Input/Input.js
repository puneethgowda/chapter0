import React from "react"
import "./input.scss"

function Input({className,label, ...rest}){
    return (
        <div className="input-wrapper">
            <label>{label}</label> 
            <input className={"" + className} type="text" {...rest}/>
        </div>
    )
}

export default Input