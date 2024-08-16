import React, { useEffect, useState } from "react";
import Tarea from "./tarea";

const Home = () => {
	const [notas, setNotas] = useState([])
	const [valorInputActual, setValorInputActual] = useState('')

	//crear usuario en forma automatica al cargar pagina//
	const createUser = () => {
		fetch("https://playground.4geeks.com/todo/users/JuanMPintos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then(() => obtenerNotas())
			.catch(error => console.log(error))
	}
	//useEffect para que se cree un usuario siempre que se inicie//
	useEffect(() => {
		createUser()
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
			//concatenar notas con el nuevo elemento//
			.then(data => setNotas(notas.concat(data)))
			.catch(error => console.log(error))
			//dejar limpio el placeholder//
			.finally(() => {
				setValorInputActual("")
			})
	}

	//cargar ARRAY de la API//
	const obtenerNotas = () => {
		fetch("https://playground.4geeks.com/todo/users/JuanMPintos")

			.then(response => response.json())
			.then(data => setNotas(data.todos))
			.catch(error => console.log(error))
	}

	// Borrar tareas//
	const deleteNotas = () => {
		fetch("https://playground.4geeks.com/todo/todos/id"), {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
		}
			.then(response => response.json())
			.then(data => setValorInputActual())
			.catch(error => console.log(error))
			.finally(() => {
				setValorInputActual("")
			})
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
				</li>{notas.map((nota, index) => {
					console.log(nota)
					return (
						<div className="contenedor-tarea" key={index}><Tarea texto={nota.label} setNotas={setNotas} /><i onClick={() => eliminarTarea(nota)} id="tachito" className="fa-solid fa-trash-can"></i></div>
					)
					
				})}
			</ul>
			<div className="footer">Tienes {notas.length} tareas pendientes</div>
		</div>
	);
};
export default Home;



