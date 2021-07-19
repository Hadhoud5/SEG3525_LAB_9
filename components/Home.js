import React from 'react'
import bg from './p20.jpeg'


const Home = () => {
	return (

		<div className="container text-center p-5">
		<h4>Bienvenue chez Build My PC !</h4>
			<img src={bg}  id="home-bg" alt="tennis rackets"/>
			<h4 style={{backgroundColor: "white", color: "black", width: "10%", position: "absolute", marginTop: "12%", left: "45%"}}>Accueil</h4>
		</div>
	)
}
export default Home
