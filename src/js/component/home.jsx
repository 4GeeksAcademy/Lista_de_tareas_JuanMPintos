import React, { useState } from "react";
import Tarea from "./tarea";

const Home = () => {
	const [notas, setNotas] = useState(['Hacer la cama'])

	//agregar elemento a la lista//
	const agregarTarea = (e) => {
		const texto = e.target.value
		setNotas([...notas, texto])
	}



	return (
		<div className="contenedor">
			<h1>To Do List</h1>
			<ul>
				<li><input onKeyDown={(e) => {
					if (e.key === 'Enter') {
						agregarTarea(e)
					}// con el boton enter agrego tarea//

				}} type="text" placeholder="Que tarea vas a realizar?"></input></li>
				{
					notas.map((nota) => {
						return <Tarea texto={nota} setNotas={setNotas}/>
					})
				}
			</ul>
			<div id="footer">10 tareas</div>
		</div>
	);
};

export default Home;
