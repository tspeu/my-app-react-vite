import React from 'react'

const msm = {
	title: 'Title' ,
	mes: 'Hola', 
}; 
//no renderiza lo que esta fuera del
// si no hay dependencia debe ir fuera el Functional Component
const getSaludo = (nombre) => `Saluda a  ${nombre}`;

export const FirstApp = () => {

	return (
		<>
		<h1>FirstApp</h1>
		<p>{getSaludo('pepe')}</p>
		{/* <p>{ JSON.stringify(msm) }</p> */}

		</>
	)
}
