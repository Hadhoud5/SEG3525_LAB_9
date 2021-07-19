import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.png'
import compo from './compo.png'
import ordi from './ordi.png'
import tool from './tool.jpeg'

const Navbar = () => {
	// Code inspiré de https://getbootstrap.com/docs/4.0/components/navbar/
	const isEN = window.location.href.indexOf("/en");
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
			<img style={{width : '3%', height : '3%'}} src={logo}/><a className="navbar-brand" href={isEN > -1 ? "/en":"/"}>Build My PC</a>
				{isEN > -1
					? <English/>
					: <French/>
				}
		</nav>
	)
}

const English = () => {
	return (
		<div className="container inline">
		<ul className="nav justify-content-center">
		<img style={{width : '10%', height : '10%'}} src={compo}/><li className="nav-item active"><a className="nav-link text-light" href="/Cours/en">Componants</a></li>
		<img style={{width : '10%', height : '10%'}} src={ordi}/><li className="nav-item active"><a className="nav-link text-light" href="/Inscrire/en">Builds</a></li>
		<img style={{width : '13%', height : '50%'}} src={tool}/><li className="nav-item active"><a className="nav-link text-light" href="/Connecter/en">Create My PC</a></li>
		</ul>
		<a className="nav-link text-light float-right" href= {window.location.href.replace("/en", "")}>Francais</a>
		</div>
	)
}

const French = () => {
	return (
		<div className="container inline">
		<ul className="nav justify-content-center">
		<li className="nav-item active"><a className="nav-link text-light" href="/Cours">Composants</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Inscrire">Créations</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Connecter">Créer mon PC</a></li>
		</ul>
		<a className="nav-link text-light float-right" href= {window.location.href + "/en"}>English</a>
		</div>
	)
}

export default Navbar