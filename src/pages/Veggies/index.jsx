import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Veggies = () => {

	const [veggies, setVeggies] = useState([]);

	useEffect(() => {
		axios({
			method: "GET",
			// vite config needs to add to the value for proxy... for each route?
			url: "/server/veggies",
		}).then((res) => {
			setVeggies(res.data);
		})
	}, [])

	return (
		<div>
			{veggies.map((veggie) =>
				// because the veggies comes from mongodb, each veggie will have an _id
				<div key={veggie._id}>
					{veggie.name}
				</div>
			)}
		</div>
	)
}

export default Veggies