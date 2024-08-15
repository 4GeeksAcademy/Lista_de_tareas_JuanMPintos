import React, { useEffect, useState } from "react";
import Tarea from "./tarea";

const Home = () => {
	const [notas, setNotas] = useState(["Cocinar"])
	const [valorInputActual, setValorInputActual] = useState('')

	//crear usuario en forma automatica al cargar pagina//
	const createUser = () => {
		fetch("https://playground.4geeks.com/todo/users/JuanMPintos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	}
	//useeffect para que se cree un usuario siempre que se inicie//
	useEffect(() => {
		createUser(), obtenerNotas()
	}, [])

	//crear notas en mi API//
	const createNotas = (tarea) => {
		fetch("https://playground.4geeks.com/todo/todos/JuanMPintos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				label: tarea,
				is_done: false
			})
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	}

	//cargar info de la API//
		const obtenerNotas = () => {
		fetch("https://playground.4geeks.com/todo/users/JuanMPintos")

			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	}
	//Agregar elemento a la lista//
	function agregarTarea(e) {
		const texto = e.target.value;
		setNotas([...notas, texto]);
		setValorInputActual("");
	}
	// eliminar tarea//
	const eliminarTarea = (tarea) => {
		setNotas(notas.filter((nota) => nota !== tarea));
	}

	return (
		<div className="contenedor">
			<h1>To Do List</h1>
			<ul>
				<li>
					<input onKeyDown={(e) => {
						if (e.key === 'Enter' && valorInputActual != "") { createNotas(valorInputActual) }
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
export default Home;



