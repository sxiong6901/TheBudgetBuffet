import React from 'react'
// import { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import mealplanning from ".././images/mealplanning.jpg";
<<<<<<< HEAD
import mealschedule2 from ".././images/mealschedule2.jpg";
import healthieryou3 from ".././images/healthieryou3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faUtensils } from '@fortawesome/free-solid-svg-icons'
import "./../styles.css";
import Carousel from 'react-bootstrap/Carousel'
=======
// import FontAwesome from 'react-fontawesome'

>>>>>>> 6209a02f3ceea874c17e924bae924f5c28a00722

library.add(fab, fas, faUtensils)

const About = ({profile}) => {
	
	
return (

	<div className="about-page">
<div className="header-color"></div>
  <Carousel>
  <Carousel.Item>
    <img
	  className="d-block w-90"
      src={mealplanning}
      alt="First slide"
    />
   <Carousel.Caption>
	<h3>Designed with you in mind</h3>
	<p style={{fontFamily: "Kufam", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}>
				Designed with you in mind. 
				</p>
	</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-90"
    src={mealschedule2}
    alt="Plan and Save"
   />
     <Carousel.Caption>
      <h3>Plan Meals</h3>
	  <p style={{fontFamily: "Kufam", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={healthieryou3}
      alt="Commit to a healthier you!"
    />

    <Carousel.Caption>
      <h3>Commit to a healthier you!</h3>
	  <p style={{fontFamily: "Kufam", fontColor: "black", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}></p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

		<div className="about">


<<<<<<< HEAD
=======
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
  
			 

>>>>>>> 6209a02f3ceea874c17e924bae924f5c28a00722
	
	<h2>Meal Planning Tips
	<FontAwesomeIcon icon="utensils" /></h2>
		<i className= "fas fa-utensils" aria-hidden="true"/>
	<hr/>
	<div className="about-tips"></div>
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