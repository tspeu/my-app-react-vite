import React from 'react';
import PropTypes from 'prop-types';

const msm = {
	title: 'Title' ,
	mes: 'Hola', 
}; 
// no renderiza lo que esta fuera del
// si no hay dependencia debe ir fuera el Functional Component
const getSaludo = (nombre) => `Saluda a  ${nombre}`;

export const FirstApp = ({title, subtitle, name}) => {
	// console.log(title);
	// if (!title) { throw new Error('EROOR')}
	return (
		<>
		<h1>FirstApp {title}</h1>
		<p> {subtitle }</p>
		<p> {name }</p>
		<p>{getSaludo('pepe')}</p>
		{/* <p>{ JSON.stringify(msm) }</p> */}

		</>
	)
}

//  prop types
FirstApp.proptypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
	title: 'no hay nada',
	subtitle: 500,
	name: "SOPA"
}