import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div>
			<img
				className="img-fluid"
				src="https://www.5minutesformom.com/wp-content/uploads/2013/12/Last-Minute-Christmas-Gift-Ideas-Holiday-Gifts.jpg"
				alt="Christmas Gift"
			/>
			<h2>Welcome to Holiday Gift Generator</h2>
			<p>
				This app helps you find a suitable gift for friends, family or that
				special someone...
			</p>
			<Link to="/age" className="btn btn-primary btn-block">
				Let's get started!
			</Link>
		</div>
	);
}
