import { useState } from 'react'
import axios from 'axios';

const CreateVeggies = () => {
	// veggies creation app
	const [veggieData, setVeggieData] = useState({
		name: "",
		color: "",
		age: 0,
		readyToEat: false,
		isHealthy: false
	})
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!veggieData.name || !veggieData.color) {
			setError('404');
			return;
		}
		console.log(veggieData);
		axios({
			method: "POST",
			url: "/server/veggies",
			data: veggieData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
		}) // the above is a promise
			.then((res) => {
				console.log(res);
				setVeggieData({
					name: "",
					color: "",
					age: 0,
					readyToEat: false,
					isHealthy: false
				});
				setError("");
			})
	}
	return (
		<div>
			<h1>New Veggie page</h1>
			{error && <div>{error}</div>}
			<form onSubmit={handleSubmit}>
				Name: <input type="text" name="name" value={veggieData.name} onChange={(e) => setVeggieData({ ...veggieData, name: e.target.value })} /><br />
				Age: <input type="number" name="age" value={veggieData.age} id="age" onChange={(e) => setVeggieData({ ...veggieData, age: e.target.value })} /><br />
				Color: <input type="text" name="color" value={veggieData.color} onChange={(e) => setVeggieData({ ...veggieData, color: e.target.value })} /><br />
				Is Ready To Eat: <input type="checkbox" name="readyToEat" value={veggieData.readyToEat} onChange={(e) => setVeggieData({ ...veggieData, readyToEat: !veggieData.readyToEat })} /><br />
				Is Healthy: <input type="checkbox" name="readyToEat" value={veggieData.isHealthy} onChange={(e) => setVeggieData({ ...veggieData, isHealthy: !veggieData.isHealthy })} /><br />
				<button>Create Veggie</button>
			</form>
		</div>);
}
export default CreateVeggies