import React from 'react'

const RecipeCard =props => {
    console.log(props.recipe)
    return (

     

        <div className="card"  style={{ "width": "22rem" }}>
            <div className="card-body">
            <span onClick={()=>props.removeRecipe(props.recipe._id)} className="remove">Delete </span>
            <span onClick={()=>props.saveRecipe(props.recipe._id)} className="save">Save</span>
            <span onClick={()=>props.editRecipe(props.recipe._id)} className="edit">edit</span>
                <h4 className="card-title">{props.recipe.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">Ingredients:</h5>
                <ul>
                    {props.recipe.ingrediants.split(",").map((ingrediant, index) => (<li key={index}>{ingrediant}</li>))}
                </ul>
                <h5>Instructions:</h5>
                <p className="card-text">{props.recipe.instructions}</p>

            </div>
        </div>
    )
}

export default RecipeCard