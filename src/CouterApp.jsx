import { useState } from 'react';
import PropTypes from 'prop-types';

// no vuelve a rendeizar la funciona y

export const CouterApp = ({value}) => {
	
	const [counter, setCounter  ] = useState(value);

	const addValue = () => {
		// console.log('addValue')
		// setCounter(counter + 1 );
		setCounter((c) => c + 1 );
	}
	
	return (
		<>
		<div>CouterApp</div>
		<h2>{ counter }</h2>
		<button onClick={ addValue}>
			+1
		</button>

		</>
	)
}

CouterApp.proptypes = {
	value: PropTypes.number.isRequired,
}

/* hooks
	* useState ->


*/