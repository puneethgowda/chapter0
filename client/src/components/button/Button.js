import React from "react"
import "./button.scss"

function Button({children, className = "",label, ...rest}){
    return (
    <button className={"btn-a " + className} {...rest}>{children}</button>
    )
}

export default Button