import React from 'react'
import deb from './debut.png'
import avance from './avance.jpeg'
import inter from './int.jpeg'
import exp from './expert.jpeg'
import debu from './debu.jpeg'
import avan from './avan.jpeg'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p4 from './p4.jpeg'
import p5 from './p6.jpeg'
import p6 from './p6.webp'




const isEN = window.location.href.indexOf("/en");
const Cours = () => {
	return (
		<div className="container text-center p-3">
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
		<h4>Graphic cards</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={deb} alt="Débutant"/>
			  <h6 class="m-3">ASUS GeForce GT 1030 Phoenix OC</h6>
			  GeForce GT 1030, 1278 MHz, PCI-Express 16x, 2 
			  <h4 class="m-3"> 200$ </h4>

			</div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermédiaire"/>
			  <h6 class="m-3">EVGA GeForce RTX 3060 Ti FTW3 ULTRA GAMING</h6>
			  GeForce RTX 3060 Ti, PCI-Express 16x, 8 Go GDDR6
			  <h4 class="m-3"> 800$ </h4>
			</div>
		</div>
		<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={avance} alt="Avancé"/>
				<h6 class="m-3">Gigabyte GeForce RTX 3080 GAMING OC 10G V2 (LHR)</h6>
				GeForce RTX 3080, PCI-Express 16x, 10 Go GDDR6X
				<h4 class="m-3"> 1400$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={exp} alt="Expert"/>
			  <h6 class="m-3">MSI GeForce RTX 3090 Gaming X TRIO</h6>
			  GeForce RTX 3090, PCI-Express 16x, 24 Go GDDR6X
			  <h4 class="m-3"> 2600$ </h4>
			</div>
		</div>

			<h4>Processors</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={debu} alt="Avancé"/>
				<h6 class="m-3">AMD Ryzen 7 3800X </h6>
				8 core, 3,60 GHz, 32 Mo, AMD Ryzen, 65 Watts
				<h4 class="m-3"> 450$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={avan} alt="Expert"/>
			  <h6 class="m-3">Intel Core i7 11700</h6>
			  8 core, 16 threads, 2.5 GHz, 16 Mo, Rocket Lake, 65 Watts, BX8070811700
			  <h4 class="m-3"> 650$ </h4>
			</div>
		</div>
			<h4>Memory</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p1} alt="Avancé"/>
				<h6 class="m-3">Corsair Vengeance RGB PRO DDR4 2 x 16 Go 3600 MHz CAS 18 Ryzen Edition</h6>
				DDR4, 32 Go, 3600 MHz - PC28800, 18-22-22-42, 1,35 Volts, CMW32GX4M2Z3600C18
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p2} alt="Expert"/>
			  <h6 class="m-3">Ballistix Noir RGB - 2 x 16 Go (32 Go) - DDR4 3600 MHz - CL16 </h6>
			 Kit RAM DDR4, 32 Go, 3600 MHz, PC28800, CL16-18-18-38, 1,35 Volts, BL2K16G36C16U4BL
			  <h4 class="m-3"> 250$ </h4>
			</div>
			</div>
			<h4>Motherboards</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p3} alt="Avancé"/>
				<h6 class="m-3">Asus PRIME B550M-A (Wi-Fi)</h6>
				Socket AM4, 1 port PCI-Express 16x, 3200 MHz (DDR4), WiFi 6, 2 ports M.2 , 2 ports USB 3.2 Gen 2, Micro-ATX
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p4} alt="Expert"/>
			  <h6 class="m-3">Gigabyte B550 Aorus Pro V2</h6>
			AMD B550 - Socket AM4 - ATX - Matisse - Compatible processeurs AMD 3ème génération
			  <h4 class="m-3"> 300$ </h4>
			</div>
			</div>
			<h4>Monitors</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p5} alt="Avancé"/>
				<h6 class="m-3">AOC C24G1</h6>
            24" (61 cm), VA, Wide (16:9), 1920 x 1080 (FHD), 1 ms, 144 Hz, VGA (x1), HDMI (x2), DisplayPort (x1)
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p6} alt="Expert"/>
			  <h6 class="m-3">MSI Optix G241</h6>
		    23,8" (60 cm), IPS, Large (16:9), 1920 x 1080 (Full HD), 1 ms, 144 Hz, HDMI (x2), DisplayPort (x1)
			  <h4 class="m-3"> 300$ </h4>
			</div>
		</div>
		</div>
	)
}
  
const French = () =>  {
	return (
		<div>
		<h4>Cartes Graphiques</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  <img class="imgs" src={deb} alt="Débutant"/>
			  <h6 class="m-3">ASUS GeForce GT 1030 Phoenix OC</h6>
			  GeForce GT 1030, 1278 MHz, PCI-Express 16x, 2 
			  <h4 class="m-3"> 200$ </h4>
			</div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermédiaire"/>
			  <h6 class="m-3">EVGA GeForce RTX 3060 Ti FTW3 ULTRA GAMING</h6>
			  GeForce RTX 3060 Ti, PCI-Express 16x, 8 Go GDDR6
			  <h4 class="m-3"> 800$ </h4>
			</div>
		</div>
		<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={avance} alt="Avancé"/>
				<h6 class="m-3">Gigabyte GeForce RTX 3080 GAMING OC 10G V2 (LHR)</h6>
				GeForce RTX 3080, PCI-Express 16x, 10 Go GDDR6X
				<h4 class="m-3"> 1400$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={exp} alt="Expert"/>
			  <h6 class="m-3">MSI GeForce RTX 3090 Gaming X TRIO</h6>
			  GeForce RTX 3090, PCI-Express 16x, 24 Go GDDR6X
			  <h4 class="m-3"> 2600$ </h4>
			</div>
		</div>
			<h4>Processeurs</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={debu} alt="Avancé"/>
				<h6 class="m-3">AMD Ryzen 7 3800X </h6>
				8 core, 3,60 GHz, 32 Mo, AMD Ryzen, 65 Watts
				<h4 class="m-3"> 450$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={avan} alt="Expert"/>
			  <h6 class="m-3">Intel Core i7 11700</h6>
			  8 core, 16 threads, 2.5 GHz, 16 Mo, Rocket Lake, 65 Watts, BX8070811700
			  <h4 class="m-3"> 650$ </h4>
			</div>
		</div>
			<h4>Memoire RAM</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p1} alt="Avancé"/>
				<h6 class="m-3">Corsair Vengeance RGB PRO DDR4 2 x 16 Go 3600 MHz CAS 18 Ryzen Edition</h6>
				DDR4, 32 Go, 3600 MHz - PC28800, 18-22-22-42, 1,35 Volts, CMW32GX4M2Z3600C18
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p2} alt="Expert"/>
			  <h6 class="m-3">Ballistix Noir RGB - 2 x 16 Go (32 Go) - DDR4 3600 MHz - CL16 </h6>
			 Kit RAM DDR4, 32 Go, 3600 MHz, PC28800, CL16-18-18-38, 1,35 Volts, BL2K16G36C16U4BL
			  <h4 class="m-3"> 250$ </h4>
			</div>
			</div>
			<h4>Cartes Meres</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p3} alt="Avancé"/>
				<h6 class="m-3">Asus PRIME B550M-A (Wi-Fi)</h6>
				Socket AM4, 1 port PCI-Express 16x, 3200 MHz (DDR4), WiFi 6, 2 ports M.2 , 2 ports USB 3.2 Gen 2, Micro-ATX
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p4} alt="Expert"/>
			  <h6 class="m-3">Gigabyte B550 Aorus Pro V2</h6>
			AMD B550 - Socket AM4 - ATX - Matisse - Compatible processeurs AMD 3ème génération
			  <h4 class="m-3"> 300$ </h4>
			</div>
			</div>
			<h4>Moniteurs</h4>
			<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={p5} alt="Avancé"/>
				<h6 class="m-3">AOC C24G1</h6>
            24" (61 cm), VA, Wide (16:9), 1920 x 1080 (FHD), 1 ms, 144 Hz, VGA (x1), HDMI (x2), DisplayPort (x1)
				<h4 class="m-3"> 350$ </h4>
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={p6} alt="Expert"/>
			  <h6 class="m-3">MSI Optix G241</h6>
		    23,8" (60 cm), IPS, Large (16:9), 1920 x 1080 (Full HD), 1 ms, 144 Hz, HDMI (x2), DisplayPort (x1)
			  <h4 class="m-3"> 300$ </h4>
			</div>
		</div>
		</div>
	)
}


export default Cours