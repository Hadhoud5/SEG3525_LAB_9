import React from 'react'
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
  <div className="container text-center p-3">
      <h4>Create my own PC</h4>
      <h6>Choose from different options available</h6>
      <div class="container bg-light p-3">
        <div class="form-inline justify-content-center">
          <div class="form-group">
            <label class="p-3" for="textPhone" title="Select the class you want to sign up for.">Graphic Card:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>Asus GeForce RTX 3080 Ti TUF</option>
              <option>Asus GeForce RTX 3090</option>
              <option>Gigabyte GeForce RTX 3060</option>
              <option>Gigabyte GeForce RTX 3080 </option>
              <option>MSI GeForce RTX 3060</option>
              <option>MSI GeForce RTX 3080 </option>
              <option>Gigabyte Radeon RX 6900 XT GAMING OC </option>
              <option>Asus Radeon RX 6800 XT TUF OC </option>
            </select>
          </div>
        </div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the class you want to sign up for.">Processor:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>AMD Ryzen 7 3700X </option>
              <option>AMD Ryzen 7 3800XT </option>
              <option>AMD Ryzen 9 3950X </option>
              <option>AMD Ryzen Threadripper Pro 3975WX  </option>
              <option>Intel Core i5 9600KF </option>
              <option>Intel Core i7 10700KF  </option>
              <option>Intel Core i9 9900K 8  </option>
            </select>
          </div>
        </div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">RAM cards:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>Corsair Vengeance RGB DDR4 2 x 16 Go </option>
              <option>Ballistix Blanche - 2 x 8 Go (16 Go) </option>
              <option>Corsair ValueSelect DDR4 32 Go  </option>
              <option>Corsair Vengeance LPX White DDR4 2 x 8 Go</option>
              <option>Corsair Vengeance RGB Pro - 4 x 16 Go  </option>
            </select>
          </div>
        
        <div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">Motherboards:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>MSI MAG B550 TORPEDO  </option>
              <option>MSI B450 TOMAHAWK MAX  </option>
              <option>Asus PRIME B550M-A  </option>
              <option>Asus PRIME X570-P </option>
              <option>Gigabyte TRX40 AORUS MASTER  </option>
            </select>
          </div>
        
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">Monitors:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>MSI Optix G241  </option>
              <option>Asus VG248QE  </option>
              <option>BenQ Zowie XL2411P  </option>
              <option>AOC 24G2U/BK</option>
              <option>ViewSonic VX2458-C-MHD </option>
            </select>
          </div>
          <button class="btn btn-primary m-3" id="soumettre" onClick={ () => validateEn()}>Submit</button>
        
      </div>
    </div>
  )
}
  
const French = () =>  {
  return (
  <div className="container text-center p-3">
      <h4>Créer mon PC</h4>
      <h6>Choisis parmis les différents choix disponibles</h6>
      <div class="container bg-light p-3">
        <div class="form-inline justify-content-center">
          <div class="form-group">
            <label class="p-3" for="textPhone" title="Select the class you want to sign up for.">Carte Graphique:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>Asus GeForce RTX 3080 Ti TUF</option>
              <option>Asus GeForce RTX 3090</option>
              <option>Gigabyte GeForce RTX 3060</option>
              <option>Gigabyte GeForce RTX 3080 </option>
              <option>MSI GeForce RTX 3060</option>
              <option>MSI GeForce RTX 3080 </option>
              <option>Gigabyte Radeon RX 6900 XT GAMING OC </option>
              <option>Asus Radeon RX 6800 XT TUF OC </option>
            </select>
          </div>
        </div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the class you want to sign up for.">Processeur:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>AMD Ryzen 7 3700X </option>
              <option>AMD Ryzen 7 3800XT </option>
              <option>AMD Ryzen 9 3950X </option>
              <option>AMD Ryzen Threadripper Pro 3975WX  </option>
              <option>Intel Core i5 9600KF </option>
              <option>Intel Core i7 10700KF  </option>
              <option>Intel Core i9 9900K 8  </option>
            </select>
          </div>
        </div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">Carte RAM:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>Corsair Vengeance RGB DDR4 2 x 16 Go </option>
              <option>Ballistix Blanche - 2 x 8 Go (16 Go) </option>
              <option>Corsair ValueSelect DDR4 32 Go  </option>
              <option>Corsair Vengeance LPX White DDR4 2 x 8 Go</option>
              <option>Corsair Vengeance RGB Pro - 4 x 16 Go  </option>
            </select>
          </div>
        
        <div>
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">Carte Mère:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>MSI MAG B550 TORPEDO  </option>
              <option>MSI B450 TOMAHAWK MAX  </option>
              <option>Asus PRIME B550M-A  </option>
              <option>Asus PRIME X570-P </option>
              <option>Gigabyte TRX40 AORUS MASTER  </option>
            </select>
          </div>
        
        <div class="form-inline justify-content-center">
          <label class="p-3" for="textPhone" title="Select the RAM card you want.">Moniteurs:</label>
            <select class="form-control" id="sel1">
                <option></option>
              <option>MSI Optix G241  </option>
              <option>Asus VG248QE  </option>
              <option>BenQ Zowie XL2411P  </option>
              <option>AOC 24G2U/BK</option>
              <option>ViewSonic VX2458-C-MHD </option>
            </select>
          </div>
          <button class="btn btn-primary m-3" id="soumettre" onClick={ () => validateEn()}>Soumettre</button>
        
      </div>
    </div>
  )
}

export default Inscrire
