import React from 'react';
import PropTypes from 'prop-types';

const addValue = () => {
	console.log('+1')
}
// no vuelve a rendeizar la funciona y

export const CouterApp = ({value}) => {


	return (
		<>
		<div>CouterApp</div>
		<h2>{ value }</h2>
		<button onClick={ addValue}>
			+1
		</button>

		</>
	)
}

CouterApp.proptypes = {
	value: PropTypes.number.isRequired,
}
