import React from 'react'
import deb from './p11.jpeg'
import inter from './p10.jpeg'
import {validate, validateEn} from './validate.js'

const isEN = window.location.href.indexOf("/en");
const Inscrire = () => {
	return (
		<div>
		{isEN > -1
			? <English/>
			: <French/>
		}
		</div>
	)
}

const English = () =>  {
return (
 		<div>
		<h4>Builds</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={deb} alt="Débutant"/>
			  <h6 class="m-3">Dex Bot Rig</h6>
			  Case : 
H710 Black (-$82.00)

CPU
AMD Ryzen 7 3700X (-$215.00)

AMD Ryzen 7 3700X (-$215.00)
CPU Cooler
Corsair H100i 240mm Liquid Cooler
Motherboard
X570 Full ATX Motherboard

Memory (RAM)
Graphics Card
NVIDIA RTX 3060 (-$350.00)

Operating System Drive
500GB NVME Solid State Drive


			  <h4 class="m-3"> 2780$ </h4>
			 </div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermédiaire"/>
			  <h6 class="m-3">Artesian Elite Series - AMD</h6>
			  Case
NZXT H710 White


CPU
AMD Ryzen 5 5600X

CPU Cooler
NZXT X53 240mm Liquid Cooler

Motherboard
X570 Full ATX Motherboard

Memory (RAM)
32gb DDR4-3200





Graphics Card
NVIDIA RTX 3070Ti(+$200.00)



			  <h4 class="m-3"> 3400$ </h4>
			</div>
		</div>
		</div>
	)
}
  
const French = () =>  {
	return (
 		<div>
		<h4>Créations</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={deb} alt="Débutant"/>
			  <h6 class="m-3">Dex Bot PC</h6>
			  Case : 
H710 Black (-$82.00)

CPU
AMD Ryzen 7 3700X (-$215.00)

AMD Ryzen 7 3700X (-$215.00)
CPU Cooler
Corsair H100i 240mm Liquid Cooler
Motherboard
X570 Full ATX Motherboard

Memory (RAM)
Graphics Card
NVIDIA RTX 3060 (-$350.00)

Operating System Drive
500GB NVME Solid State Drive


			  <h4 class="m-3"> 2780$ </h4>
			 </div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermédiaire"/>
			  <h6 class="m-3">Artesian Elite Series - AMD</h6>
			  Case
NZXT H710 White


CPU
AMD Ryzen 5 5600X

CPU Cooler
NZXT X53 240mm Liquid Cooler

Motherboard
X570 Full ATX Motherboard

Memory (RAM)
32gb DDR4-3200





Graphics Card
NVIDIA RTX 3070Ti(+$200.00)



			  <h4 class="m-3"> 3400$ </h4>
			</div>
		</div>
		</div>
	)
}

export default Inscrire