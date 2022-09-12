import { useState } from 'react';
import PropTypes from 'prop-types';

// no vuelve a rendeizar la funciona y

export const CouterApp = ({value}) => {
	
	const [counter, setCounter  ] = useState(value);
	// const [counter, resetCounter  ] = useState(value);

	console.log('render')

	const addValue = () => {
		// console.log('addValue')
		// setCounter(counter + 1 );
		setCounter((c) => c + 1 );
	}
	
	const minusValue = () => {
		// console.log('addValue')
		// setCounter(counter + 1 );
		setCounter((c) => c - 1 );
	}

	const resetValue = () => {
		console.log('resetValue');
		// setCounter(counter + 1 );
		setCounter(() => value);
	}
	
	return (
		<>
		<div>CouterApp</div>
		<h2>{ counter }</h2>
		<button onClick={ addValue}>+1</button>
		<button onClick={ minusValue}>-1</button>
		<button onClick={ resetValue}>Reset</button>

		</>
	)
}

CouterApp.proptypes = {
	value: PropTypes.number.isRequired,
}

/* hooks
	* useState -> destructura el primer es el valor y el segundo es una funcion


*/