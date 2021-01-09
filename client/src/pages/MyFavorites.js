import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'

const Favorites = props => {

	// const [recipes, setRecipes] = useState([])

	// useEffect(() => {
	// 	API.myRecipes()
	// 		.then(results => {
	// 			setRecipes(curr => [...curr, ...results])
			
	// 		})
	// }, [])


	return (
		<>
			<h1>My Favorites</h1>
			
			{/* {recipes && recipes.map( recipe => <RecipeCard key={recipe._id} recipe={recipe} />)} */}
		</>
	)
}

export default Favorites