import React from 'react'
import { Component } from 'react';
// import {Container, Row, Col} from "react-bootstrap";
import mealplanning from ".././images/mealplanning.jpg";

const About = ({profile}) => {
	
	class About extends Component {
	// render (){
return (
	<div className="about-page">
<Container>
  <Row>
    <Col>
	<h2>About Budget Buffet</h2>
	<img src={mealplanning}
	alt="mealplanning"
	style={{height: "550px"}}
	/>
	<p style={{fontSize: "25px", width: "75%", margin: "auto", paddingTop: "1em"}}>
				Designed with you in mind. 
				Learn how to plan meals on a budget so that you can save money and waste less food.
				Commit to a Healthier you! </p>
		
	</Col>
	</Row>
    <Col>
	
	<h2>Meal Planning Tips</h2>
		<i className= "fa fa-utensils" aria-hidden="true"/>
	<hr/>
	<div className="about-tips"></div>
	</Col>
		  <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		  >
  
		  </a>
		 
		   </Container>
		   </div>

)
}
	}}
export default About