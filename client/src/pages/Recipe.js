import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import API from '../utils/API';


const Recipe = ({ profile }) => {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [directions, setDirections] = useState("");
	const [redirect, setRedirect] = useState(false) 
	const formSubmit = event => {
		event.preventDefault();
		const newRecipe = { title: title, ingrediants: ingredients, instructions: directions }
		API.addRecipe(newRecipe)
			.then(()=>setRedirect(true))
		console.log(title, ingredients, directions)
	}
	if(redirect){
		return <Redirect to="/myrecipe" />;
	}
	return (


		<div className="createRecipe">
			<h1 style={{textAlign: "center"}}>Create A Recipe</h1>
			<h5 style={{textAlign: "center"}}>Add Your Favorite Recipe and Make It Available to Share with Friends!</h5>

			<form onSubmit={formSubmit}>
				<div className="form-group">
					<label htmlFor="recipetitle">Recipe Title</label>
					<input type="text" className="form-control" id="recipetitle" value={title} onChange={e => setTitle(e.target.value)} />
				</div>
				<div className="form-group">
					<label htmlFor="ingredients">Ingredients</label>
					<input type="text" className="form-control" id="ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} />
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" className="form-control" id="description" value={directions} onChange={e => setDirections(e.target.value)} />
				</div>
				<button type="submit">Add Recipe</button>
			</form>


			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>

			</a>

		</div>
	)
}

export default Recipe