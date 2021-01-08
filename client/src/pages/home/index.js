import React from 'react'



const Home = ({profile}) => {
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
		   </div>
		  </div>
		</div>
		
		
	)
}

export default Home