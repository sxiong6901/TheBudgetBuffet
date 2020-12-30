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
		  <container>
        <h2> View Recipes Shared By All Users </h2>
	<p>	<input type="text" placeholder="Search.." name="search"></input>
		<button type="submit"><i class="fa fa-search">Search</i></button></p>
			
        </container>
		
       
      
			{recipes && recipes.map(recipe=>(
				<RecipeCard key= {recipe._id} recipe={recipe}/>
			
			))}
		</>
	)
}

export default ViewAll