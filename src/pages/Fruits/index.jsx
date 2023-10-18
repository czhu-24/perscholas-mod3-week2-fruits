import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fruits = () => {

	const [fruits, setFruits] = useState([]);
	const [searchedFruits, setSearchedFruits] = useState([]);
	const [search, setSearch] = useState("");

	// get the fruits from the server

	useEffect(() => {
		axios({
			method: "GET",
			// Vite is going to figure out rest of URL before /fruits
			// we'll need to config it though
			url: "/server/fruits"
		}).then((res) => {
			console.log(res.data);
			setFruits(res.data);
		})
	}, [])

	const handleSearch = (e) => {
		// currentSearch is because the state variable's value won't be changed until on next render
		const currentSearch = e.target.value;
		console.log(currentSearch);
		setSearch(currentSearch);
		axios({
			method: "GET",
			url: `/server/fruits/search?searchTerm=${currentSearch}`
			// FOR SOME FRIGGIN' REASON AXIOS USES PARAMS TO PASS QUERY (PARAMETERS)
			//params: { searchTerm: currentSearch }
		}).then((res) => {
			console.log(res);
			setSearchedFruits(res.data);
		})
	}

	return (
		<>
			<label htmlFor="search">Search:</label><input type="text" value={search} onChange={handleSearch} name="search" id="search" />
			<br />

			<ul>
				{!search ? fruits.map((fruit) => (
					<li key={JSON.stringify(fruit)}>
						<p>{fruit.name}</p>
						<p>{fruit.age}</p>
					</li>
				)) : searchedFruits.map((fruit) => (
					<li key={JSON.stringify(fruit)}>
						<p>{fruit.name}</p>
						<p>{fruit.age}</p>
					</li>
				))}
			</ul>
		</>
	)
}

export default Fruits