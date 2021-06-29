import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  tarjeta = {
    tipoTarjeta: '', nombre: '', numeroTarjeta: '', codigoSeguridad: '', mesAnio: ''
  }
  alertTipo = '';
  alertNombre = '';
  alertNumero = '';
  alertCodigo = '';
  alertFecha = '';
  validado: boolean = false;

  tipoTarjeta = new FormControl('', Validators.required)
  nombre = new FormControl('', Validators.required)
  numeroTarjeta = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)])
  codigoSeguridad = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3)])
  mesAnio = new FormControl('', Validators.required)



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validar() {
    if (this.tipoTarjeta.value == 'debito' ||  this.tipoTarjeta.value == 'credito') {
      this.alertTipo = "";
      this.validado = true;
    }else {
      this.alertTipo = "Debe seleccionar el tipo de tarjeta";
      this.validado = false;
    }
    if (this.nombre.value.length == 0) {
      this.alertNombre = "debe ingresar nombre";
      this.validado = false;
    }else{
      this.alertNombre = ""
      this.validado = true;
    }
    if (this.numeroTarjeta.value.length != 16) {
      this.alertNumero = "Debe ingresar un numero de tarjeta correcto (16 dígitos)";
      this.validado = false;
    }else {
      this.alertNumero = "";
      this.validado = true;
    }
    if (this.codigoSeguridad.value.length != 3) {
      this.alertCodigo = "debe ingresar codigo de seguridad válido"
      this.validado = false;
    }else {
      this.alertCodigo = "";
      this.validado = true;
    }
    if (this.mesAnio.value.length != 4) {
      this.alertFecha = "Debe ingresar una fecha del tipo mmaa"
      this.validado = false;
    }else {
      this.alertFecha = "";
      this.validado = true;
    }
    if (this.validado) {
      this.router.navigate(['direccion']);
    
    }
  }
  

}
