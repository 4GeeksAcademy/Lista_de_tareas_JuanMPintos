import React, { useState } from "react";
import Tarea from "./tarea";

const Home = () => {
	const [notas, setNotas] = useState([])

	//Agregar elemento a la lista//
	const agregarTarea = (e) => {
		const texto = e.target.value
		setNotas([...notas, texto])
	}
	return (
		<div className="contenedor">
			<h1>To Do List</h1>
			<ul>
				<li>
					<input onKeyDown={(e) => {
						if (e.key === 'Enter') {
							agregarTarea(e)
						}
					}} type="text" placeholder="Que tarea vas a realizar?">
					</input>
				</li>{notas.map((nota) => {
					return <Tarea texto={nota} setNotas={setNotas} />
				})}
			</ul>
			<div className="footer">Tienes {notas.length} tareas</div>
		</div>
	);
};

export default Home;



// AGREGAR FUNCION FILTER AL TRASH//
//QUE SE PONGA EN BLANCO EL INPUT DESPUES DE PONER LA TAREA//