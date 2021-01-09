import React from 'react'
// import { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import mealplanning from ".././images/mealplanning.jpg";
import mealplanschedule from ".././images/mealplanschedule.jpg";
import healthieryou3 from ".././images/healthieryou3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faUtensils } from '@fortawesome/free-solid-svg-icons'
import "./../styles.css";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

library.add(fab, fas, faUtensils)

const About = ({profile}) => {
	
	
return (

	<div className="about-page">
		<h2> About Us</h2>
<div className="header-color"></div>
  <Carousel>
  <Carousel.Item>
	<img 
	className="d-block w-100"
	src="data:image/jpeg;base64,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"
	alt="First Slide"/>
   <Carousel.Caption>
	<p style={{fontFamily: "Kufam", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}>
				Designed with you in mind.</p>
	</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>.g
	<img className="d-block w-100"
	src="data:image/jpeg;base64,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"
	alt="Second Slide" />
     <Carousel.Caption>
       <p style={{fontFamily: "Kufam", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}></p>
      <p>Plan and Save</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
	<img className="d-block w-100"
	src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkdMS2BOJ2myuVN9QpLWtdzIdG3nvE1FR0A&usqp=CAU"
	alt="Third Slide"/>
    <Carousel.Caption>
      <p style={{fontFamily: "Kufam", fontColor: "black", fontSize: "45px", width: "75%", margin: "auto", paddingTop: "1em", align: "center"}}></p>
      <p>Commit to a healtier you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

		<div className="about">

<hr style={{borderTop: "3px solid #ffffff"}}/>
	
	<h3>Meal Planning Tips
	<FontAwesomeIcon icon="utensils" /></h3>
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