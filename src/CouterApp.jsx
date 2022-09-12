import React from 'react';
import PropTypes from 'prop-types';

export const CouterApp = ({value}) => {

	const addValue = (event, newVaLUE) => {
		console.log(event)
		console.log(newVaLUE)
	}

	return (
		<>
		<div>CouterApp</div>
		<h2>{ value }</h2>
		<button onClick={ (event) => addValue(event, 'HOLA TU')}>
			+1
		</button>

		</>
	)
}

CouterApp.proptypes = {
	value: PropTypes.number.isRequired,
}
