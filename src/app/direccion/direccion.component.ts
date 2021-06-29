import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  alertPais = '';
  alertCalle = '';
  alertCiudad = '';
  alertRegion = '';
  alertCodigo = '';
  validado = false;

  pais = new FormControl()
  calle = new FormControl()
  ciudad = new FormControl()
  region = new FormControl()
  codigoPostal = new FormControl()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validar(){
    if (this.pais.value.length != 0) {
      this.alertPais = "";
      this.validado = true;
    }else {
      this.alertPais = "Debe indicar el Pais";
      this.validado = false;
    }
    if (this.calle.value.length == 0) {
      this.alertCalle = "debe ingresar calle";
      this.validado = false;
    }else{
      this.alertCalle = ""
      this.validado = true;
    }
    if (this.ciudad.value.length == 0) {
      this.alertCiudad = "Debe ingresar ciudad";
      this.validado = false;
    }else {
      this.alertCiudad = "";
      this.validado = true;
    }
    if (this.region.value.length == 3) {
      this.alertRegion = "debe ingresar Región"
      this.validado = false;
    }else {
      this.alertRegion = "";
      this.validado = true;
    }
    if (this.codigoPostal.value.length != 6) {
      this.alertCodigo = "Debe ingresar un cosigo postal de 6 numeros"
      this.validado = false;
    }else {
      this.alertCodigo = "";
      this.validado = true;
    }
    if (this.validado) {
      this.router.navigate(['productos']);
    
    }
  }

}
