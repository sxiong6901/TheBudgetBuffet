import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class MyRecipes extends React.Component {
	
	state = {
		title: '',
		ingredients: '',
		instructions:''
	};

	getMyRecipes = () => {
		axios.get('/api/users')
		.then((response) => {
			const data=response.data;
			this.setState({posts:data})
			console.log("Data hs been received!")
		})
		.catch(()=>{
			alert('Error retrieving data!!');
		})
			
	}

	handleChange =({target}) => {
		const {name, value} = target; 
		this.setState({ [name]: value});
	}

	componentDidMount() {
		this.getMyRecipes()
	}
	
	render() {
		console.log('State: ', this.state)
		return <Redirect to="/myRecipe" />
	}
}

export default MyRecipes