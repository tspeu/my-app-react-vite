import React from 'react'


const msm = {
	title: 'Title' ,
	mes: 'Hola', 
}; 
// no renderiza lo que esta fuera del
// si no hay dependencia debe ir fuera el Functional Component
const getSaludo = (nombre) => `Saluda a  ${nombre}`;

export const FirstApp = ({title, subtitle}) => {
	// console.log(title);
	return (
		<>
		<h1>FirstApp {title}</h1>
		<p> {subtitle + 1 }</p>
		<p>{getSaludo('pepe')}</p>
		{/* <p>{ JSON.stringify(msm) }</p> */}

		</>
	)
}
