import React from "react"

const Tarea = ({texto, setNotas}) => {
}
//buscar filter//
const eliminarTarea = (index) => {
setNotas()
} 

    return (

    <li>{texto}<i onClick={eliminarTarea} class="fa-solid fa-trash-can"></i></li>
)


export default Tarea;
