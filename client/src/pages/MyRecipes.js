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

		</>
	)
}


	}


export default MyRecipes