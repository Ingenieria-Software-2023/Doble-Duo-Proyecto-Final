import React, { useState } from "react";
import { useUsuarixs } from "../UsuarixsContexto";
import { useNavigate } from "react-router-dom";

const InicioSesion = () => {
	const [correo, setCorreo] = useState("");
	const [contraseña, setContraseña] = useState("");
	const { validarUsuarix } = useUsuarixs();
	const navigate = useNavigate();

	const manejarInicioSesion = (e) => {
		e.preventDefault();
		if (validarUsuarix({ correo, contraseña })) {
			navigate("/menu");
		} else {
			alert("Correo o contraseña incorrectos.");
		}
	};

	return (
		<form onSubmit={manejarInicioSesion}>
			<label>
				Correo:
				<input
					value={correo}
					onChange={(e) => setCorreo(e.target.value)}
				/>
			</label>
			<label>
				Contraseña:
				<input
					type="password"
					value={contraseña}
					onChange={(e) => setContraseña(e.target.value)}
				/>
			</label>
			<button type="submit">Iniciar sesión</button>
			<p>
				¿No tienes una cuenta? <a href="/crear-cuenta">Crear cuenta</a>
			</p>
		</form>
	);
};

export default InicioSesion;
