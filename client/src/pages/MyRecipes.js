import React, { useEffect, useState } from 'react'
// import { myRecipes, myFavorites } from '../../../controllers'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'


const MyRecipes = props => {
	const [recipes, setRecipes] = useState([])
	const [recipe, setNewRecipe] = useState([])
	// const [favoriteRecipes, setFavoriteRecipes] = useState([])
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

	useEffect(() => {
		loadRecipe()
	}, [])

	function loadRecipe(id) {
		API.myRecipes()
			.then(res =>
				setNewRecipe(res.data)

			)
			.catch(err => console.log(err));
	};

	const updateRecipe = (id) => {
		console.log(id)
		API.updateRecipe(id)
			.then(res => loadRecipe(res))
			.catch(err => console.log(err));
		var newRecipeList = recipes.filter(recipe => recipe._id !== id)
		setRecipes(newRecipeList)
		console.log(newRecipeList)


	// }

	
	// const myFavorites = (id) => {
	// 	console.log(id)
	// 	API.myRecipe(id)
	// 		.then(res => loadRecipe(res))
	// 		.catch(err => console.log(err));
	// 		console.log(recipe)
		// var myfavorites = recipes.push(recipe => recipe._id !== id)
		// setRecipes(myfavorites)
		// console.log(myfavorites)


	}


	


	return (
		<>
			<h1>My Recipes</h1>

			{recipes && recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe={updateRecipe}></RecipeCard>)}
		</>
	)

	}
export default MyRecipes