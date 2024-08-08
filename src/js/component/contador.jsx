import React from "react";


const Contador = ({ count }) => {
    return (
        <footer>Tienes {count} {count === 1 ? 'tarea' : 'tareas'} en tu lista</footer>
    );
  };

  export default Contador;