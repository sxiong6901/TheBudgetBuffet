import React, { useEffect, useState } from 'react'
import RecipeCard2 from '../components/RecipeCard2'
import API from '../utils/API'

const ViewAll = props => {
	const [recipes, setRecipes] = useState([])
	// const [favoriteRecipes, setFavoriteRecipes] = useState([])
	// const [term, setTerm] = useState([])
	// const [filteredList, setList]= useState([])
	// const [search, setSearch] = useState("");
	

	// const handleSearch = term => {
	// 	console.log(term)
		// console.log(recipes)
	// 	const filteredList = recipes.filter(recipes => recipes.title.toLowerCase().includes(term.toLowerCase()))
	// 	console.log(filteredList)
	// 	setTerm(term)
	// }
	// setList({filteredList})
	// console.log(filteredList)

	useEffect(() => {
		API.viewRecipe()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			})
	}, [])

	// const save = (id) => {
	// 	console.log(id)

	// 	var favoritesList = []
	// 	recipes.forEach(element => {
	// 		if (element._id === id) {
	// 			favoritesList.push(element)
	// 			setFavoriteRecipes(favoritesList)
	// 			console.log(favoritesList)
	// 		}

	// 	})


	// }



	return (
		<>
			{/* <container>
        <h2> View Recipes Shared By All Users </h2>
	<p>	<input type="text" placeholder="Search.." name="search"></input>
		<button type="submit"><i className="fa fa-search">Search</i></button></p>
			
        </container> */}
		<div></div>
		<h2 >Explore Recipes Created By Other Users</h2>
			{/* <div className="form-group">
				<input
					onChange={e => handleSearch(e.target.value)}
					value={term}
					name="search"
					type="text"
					className="form-control"
					placeholder="Search for a recipe"
					id="search"
				/>
						
			</div> */}


			{recipes && recipes.map(recipe => (
				<RecipeCard2 key={recipe._id} recipe={recipe}  />

			))}
		</>
	)
}

export default ViewAll