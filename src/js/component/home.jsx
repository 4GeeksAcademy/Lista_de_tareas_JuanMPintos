import React, { useState } from "react";
import Tarea from "./tarea";

const Home = () => {
	const [notas, setNotas] = useState()
	const [valorInputActual, setValorInputActual] = useState('')

	//Agregar elemento a la lista//
	function agregarTarea(e) {
		const texto = e.target.value;
		setNotas([...notas, texto]);
		setValorInputActual("");
	}
	// eliminar tarea//
	const eliminarTarea = (tarea) => {
		setNotas(notas.filter((nota) => nota !== tarea));

		return (
			<div className="contenedor">
				<h1>To Do List</h1>
				<ul>
					<li>
						<input onKeyDown={(e) => {
							if (e.key === 'Enter' && valorInputActual != "") { agregarTarea(e) }
						}}
							type="text"
							placeholder="Que tarea vas a realizar?"
							value={valorInputActual}
							onChange={(e) => setValorInputActual(e.target.value)}>
						</input>
					</li>{notas.map((nota, index) => (
						<div className="contenedor-tarea"><Tarea texto={nota} key={index} setNotas={setNotas} /><i onClick={() => eliminarTarea(nota)} id="tachito" className="fa-solid fa-trash-can"></i></div>
					))}
				</ul>
				<div className="footer">Tienes {notas.length} tareas pendientes</div>
			</div>
		);
	};
};
export default Home;



