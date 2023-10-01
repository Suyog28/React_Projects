import { Children } from 'react'

function Button(
    {
        children,
        type = "button",
        bgColor = "bg-blue-600",
        hoverColor = "hover:bg-blue-600",
        textColor = "text-white",
        size = "text-sm",
        className = "",
        ...props

    }

) {


    return (
        <button
            className={`px-4 py-2 rounded-lg ${bgColor} ${hoverColor}
            ${textColor} ${size}
             ${className}`} {...props}
        >{children}</button>
    )
}

export default Button