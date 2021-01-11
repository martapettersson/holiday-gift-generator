import React from "react";
import { Link } from "react-router-dom";

export default function ButtonNext({ to, currentValue, label }) {
	const isValidated = () => {
		//inte disabled när currentvalue inte är lika med tom sträng
		//alltså knappen ska vara disabled när currentvalue är en tom sträng
		return currentValue !== "";
	};
	return (
		<Link
			to={to}
			className={`btn btn-secondary btn-block ${!isValidated() && "disabled"}`}
		>
			{isValidated() ? label : "Please pick a choice!"}
		</Link>
	);
}
