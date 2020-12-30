import React, {useState} from 'react'
import Card from '../../components/Card'
import vipImage from './vip.png'
import API from '../../utils/API'


const Home = ({profile}) => {

	const [joke, setJoke] = useState("")
	const [password, setPassword] = useState("")

	const handleClick = (token) => {
		API.getSecret(token).then(result => {
			console.log(result)
			if (result.data[0].joke) setJoke(result.data[0].joke)
			if (result.data[0].password) setPassword(result.data[0].password)
		})
	}
	return (
		<div className='VIP'>
		  <div className='row'>
			 <div className='column column-33 column-offset-33'>
			 	{/* <img src={vipImage} height={90} width={90} alt="VIP" /> */}
				<h4>Welcome {profile.name}!</h4>
				<h6>{profile.email}</h6>
				{/* <div className="padded-multiline">
  					<p>    					
      					{profile.token}
    				</p>
				</div>			 */}
					<img src="BudgetPlanning.png" className="App-logo" alt="logo" />
		  <p> 
			<input type="text" placeholder="Search.." name="search"></input>
			<button type="submit"><i className="fa fa-search">Search</i></button>
		  </p>
			
				{/* <button onClick={() => handleClick(profile.token)}>Get Secret Joke</button>
				{joke ? <Card
						password = {password}
					// 	joke = {joke}			   */}
				
		   </div>
		  </div>
		</div>
		
		
	)
}

export default Home