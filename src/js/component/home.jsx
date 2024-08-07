import React, { useState } from "react";
import Tareas from "./Tareas";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [toDoList, setToDolist] = useState([])

	return (
		<div className="contenedor">
			<h1>To Do List</h1>
			<ul>
				<li><input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Que tarea vas a realizar?"></input></li>
				<li>Hacer la cama <i class="fa-solid fa-trash-can"></i></li>
				<li>Pasear el perro <i class="fa-solid fa-trash-can"></i></li>
				<li>Ir al supermercado <i class="fa-solid fa-trash-can"></i></li>
				<li>Mentoria con Javi <i class="fa-solid fa-trash-can"></i></li>
				<li>Preparar la cena <i class="fa-solid fa-trash-can"></i></li>
			</ul>
			<div id="footer">10 tareas</div>
		</div>
	);
};

export default Home;
