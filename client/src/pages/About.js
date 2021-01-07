import React from 'react'
// import {Container} from "react-bootstrap";


const About = ({profile}) => {
	
return (
		<div className="about">
{/* <Container>
  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container> */}




		<div>
			<h3>About Budget Buffet</h3>
			<p style={{fontSize: "25px", width: "75%", margin: "auto", paddingTop: "1em"}}>
				Designed with you in mind. 
				Learn how to plan meals on a budget so that you can save money and waste less food.
				Commit to a Healthier you! </p>
				<hr/>

			<h3>Meal Planning Tips
				<i className= "fa fa-utensils" aria-hidden="true"/>
			</h3>


			
			
			</div>
  
			 
	
		  
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