import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fruits = () => {

	const [fruits, setFruits] = useState([]);

	// get the fruits from the server

	useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:3000/fruits"
		}).then((res) => {
			console.log(res.data);
			setFruits(res.data);
		})
	}, [])


	return (
		<ul>{fruits.map(fruit =>
			<li key={JSON.stringify(fruit)}>
				<p>{fruit.name} </p>
				<p>{fruit.color} </p>
				<p>ready to eat? {fruit.readyToEat ? "true" : "false"} </p>
			</li>)
		}</ul>
	)
}

export default Fruits