import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'

const ViewAll = props => {
	const [recipes, setRecipes] = useState([])
	useEffect(() => {
		API.viewRecipe()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			})
	}, [])

	// handleChange =({target}) => {
	// 	const {name, value} = target; 
	// 	this.setState({ [name]: value});
	// }



	return (
		<>
			{recipes && recipes.map(recipe=>(
				<RecipeCard key= {recipe._id} recipe={recipe}/>
			
			))}
		</>
	)
}

export default ViewAll