import React from "react";

function ColorButton({color, onClick}){

    return (
        <>
            <button className="w-25 h-10 m-2.5 rounded-full" style={{backgroundColor: color , color:"white"}} onClick={onClick}>{color}</button>
        </>
    )
}

export default ColorButton;
