import React from "react"

const Tarea = ({texto}) => {
   	
    return (

    <li>{texto}<i id="tachito" className="fa-solid fa-trash-can"></i></li>
)
}
export default Tarea;
