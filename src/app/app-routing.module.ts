import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'pago',
    component: PagoComponent
  },
  {
    path: 'direccion',
    component: DireccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
