import React, { useEffect, useState } from 'react'
// import { myRecipes, myFavorites } from '../../../controllers'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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
		<div className="my-recipes">

			<h1>My Recipes</h1>


			{recipes && recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe={updateRecipe} saveRecipe={save}></RecipeCard>)}
			
	
			<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps71319_TH153343B04_21_9b.jpg" />
    <Card.Body>
      <Card.Title style={{fontSize: "25px", fontFamily: "Arial"}}>Recipe 1: Cheesy Onion Chicken Skillet</Card.Title>
      <Card.Text style={{fontSize: "15px", fontFamily: "Arial"}}>
        Ingredients: onion, chicken, green bell peppers.
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/01/1514931389-1453936103-delish-turkey-ragu-1.jpg" />
    <Card.Body>
      <Card.Title style={{fontSize: "25px", fontFamily: "Arial"}}>Recipe 2: Ground Turkey Spaghetti</Card.Title>
      <Card.Text style={{fontSize: "15px", fontFamily: "Arial"}}>
	  Ingredients: ground turkey, spaghetti, onion.
      </Card.Text>
    </Card.Body>
      </Card>
  <Card>
    <Card.Img variant="top" src="https://thecozycook.com/wp-content/uploads/2018/01/Baked-Potato-Slices-1-1.jpg" />
    <Card.Body>
      <Card.Title style={{fontSize: "25px", fontFamily: "Arial"}}>Recipe 3:Baked Potatoe Slices</Card.Title>
      <Card.Text style={{fontSize: "15px", fontFamily: "Arial"}} >
	  Ingredients: russet potatoes, olive oil, cheese.
      </Card.Text>
    </Card.Body>
      </Card>
</CardGroup>
</div>
	)
}

			{recipes && recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe={updateRecipe}></RecipeCard>)}
		</>
	)

	}

export default MyRecipes