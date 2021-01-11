import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const MyRecipes = props => {
	const [recipes, setRecipes] = useState([])
	const [favoriteRecipes, setFavoriteRecipes] = useState([])
	// useEffect(()=> {
	// 	API.myFavorites()
	// 	.then(results=> {
	// 		setFavoriteRecipes(curr => [...curr, ...results])
	// 	})
	// })

	useEffect(() => {
		API.myRecipes()
			.then(results => {
				setRecipes(curr => [...curr, ...results])

			})
	}, [])

	const deleteRecipe = (id) => {
		console.log(id)
		if (window.confirm('Are you sure you want to delete?')) {

		}
		var newRecipeList = recipes.filter(recipe => recipe._id !== id)

		setRecipes(newRecipeList)

	}

	const save = (id) => {
		console.log(id)

		var favoritesList = []
		recipes.forEach(element => {
			if (element._id === id) {
				favoritesList.push(element)
				setFavoriteRecipes(favoritesList)
				console.log(favoritesList)
			}

		})


	}


	return (
		<div className="my-recipes">

			<h1>My Recipes</h1>
			<p>Create a recipe, save for future use and share with friends</p>


			{recipes && recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe={deleteRecipe} saveRecipe={save}></RecipeCard>)}


</div>
</div>
	)
}

export default MyRecipes