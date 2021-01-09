import React from 'react'
// import { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import mealplanning from ".././images/mealplanning.jpg";
// import FontAwesome from 'react-fontawesome'



const About = ({profile}) => {
	
	
return (

	<div className="about-page">

  <Row>
  <Container>
    <Col>
	<h2>About Budget Buffet</h2>
	<img src={mealplanning}
	alt="mealplanning"
	style={{height: "550px"}}
	/>
	<p style={{fontFamily: "Kufam", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}>
				Designed with you in mind. 
				Learn how to plan meals on a budget so that you can save money and waste less food.
				Commit to a Healthier you! </p>
		
	</Col>
	</Container>
	</Row>

    <Col>

		<div className="about">


		<div>

<container>
			<h3>About Budget Buffet</h3>
			</container>
	

  

			<p style={{fontSize: "25px", width: "75%", margin: "auto", paddingTop: "1em"}}>
				Designed with you in mind. 
				Learn how to plan meals on a budget so that you can save money and waste less food.
				Commit to a Healthier you! </p> 
				<hr/>

			{/* <h3>Meal Planning Tips
				<i className= "fa fa-utensils" aria-hidden="true"/>

			</h3>
			<p></p>

			</h3> */}



			
			
			</div>
  
			 

	
	<h2>Meal Planning Tips</h2>
		<i className= "fa fa-utensils" aria-hidden="true"/>
	<hr/>
	<div className="about-tips"></div>
	</div>
	</Col>
	
		  <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		  >
  
		  </a>
		 
		   
		   </div>
		   
		   

)
}
	
export default About