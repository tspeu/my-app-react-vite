import React from 'react';
import PropTypes from 'prop-types';

export const CouterApp = ({value}) => {
	return (
		<>
		<div>CouterApp</div>
		<h2>{ value}</h2>
		</>
	)
}

CouterApp.proptypes = {
	value: PropTypes.number.isRequired,
}
