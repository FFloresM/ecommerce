import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaProductos!: Producto[];
  aux!: Producto[];

  ngOnInit() {
    this.listaProductos = [
      { id: 123, nombre: "Mynt3D Pro", precio: 94990, descripcion: "Lápiz 3D Mynt3D Profesional con pantalla Oled", img: "assets/imagenes/mynt3dPro.jpg", tags: ['lapiz', 'lapiz3d', '3d', 'mynt3d'] },
      { id: 124, nombre: "Mynt3D Super", precio: 69990, descripcion: "Lápiz 3D Mynt3D Súper", img: "assets/imagenes/super.jpg", tags: ['lapiz', 'lapiz3d', '3d', 'mynt3d'] },
      { id: 125, nombre: "70mai Dash Cam Wide", precio: 119990, descripcion: "Cámara vehículo espejo 70mai Dash Cam Wide", img: "assets/imagenes/70maiwide.jpg", tags: ['camara vehiculo', 'camara espejo', '70mai', 'camara'] },
      { id: 126, nombre: "70mai Dash Cam Pro", precio: 99990, descripcion: "Cámara vehículo 70mai Dash Cam Pro", img: "assets/imagenes/70maiPro.jpg", tags: ['camara vehiculo', 'camara espejo', '70mai', 'camara'] },
      { id: 127, nombre: "Correa silicona 20mm", precio: 6990, descripcion: "Correa de silicona 20mm para smartwatch", img: "assets/imagenes/correa20.jpg", tags: ['correa', 'correa silicona', 'smartwach'] },
      { id: 128, nombre: "Car mount Torras", precio: 15990, descripcion: "Soporte de smartphone para vehículo Torras", img: "assets/imagenes/soporteTorras.jpg", tags: ['soporte celular', 'celular', 'soporte vehiculo', 'smartphone'] },
      { id: 129, nombre: "Protector pantalla galaxy watch active", precio: 6990, descripcion: "Lámina protectora de pantalla para smartwatch galay watch active y active 2 (ambas tallas)", img: "assets/imagenes/active.jpg", tags: ['smartwatch', 'protector pantalla', 'lamina pantalla'] },
      { id: 130, nombre: "Correa Silicona apple watch", precio: 7990, descripcion: "Correa de silicona para apple watch todas las series. Consulte por colores disponibles", img: "assets/imagenes/apple.jpg", tags: ['correa', 'correa silicona', 'smartwach', 'apple', 'apple watch']  },
      { id: 131, nombre: "Fragancia para vehículos solar Torras", precio: 25990, descripcion: "Fragancia para vehículos solar de la marca Torras. Gira con lus solar. Duracion etimada de la fragancia: 1 año.", img: "assets/imagenes/fragancia.jpg", tags: ['Fragancia', 'fragancia vehiculo', 'torras']  },
      { id: 132, nombre: "Conector eléctrico wago 3 entradas", precio: 5490, descripcion: "Conector eléctrico rápido tipo wago para unir 3 alambres. 10 unidades por paquete.", img: "assets/imagenes/wago.jpg", tags: ['conector', 'conector electrico', 'conector rapido', 'wago']  },
      { id: 133, nombre: "Filamento para lápiz 3D PLA", precio: 15990, descripcion: "Filamento para lápiz 3D Mynt3D. Filamentos de PLA. Incluye 10 colores diferentes por 3 metros cada uno. Total 30 metros.", img: "assets/imagenes/filamento.jpg", tags: ['mynt3d', 'filamento', 'lapiz 3d', 'PLA']  },
      { id: 134, nombre: "Lámina hidrogel Samsung", precio: 6490, descripcion: "Lámina de hidrogel para smarphones Samsung todos los modelos del mercado. Hacemos envíos a todo chile. Consulte por su modelo.", img: "assets/imagenes/hidrogel.jpg", tags: ['lamina pantalla', 'lamina hidrogel', 'protector pantalla', 'samsung']  },
      { id: 135, nombre: "Cabla USB 3 en 1", precio: 5990, descripcion: "Cable cargador USB de carga rápida 3 en 1. Tipo-C/Micro USB/Lightning. 1 metro de largo.", img: "assets/imagenes/usb.jpg", tags: ['cable usb', "micro usb", 'cargador']  },
      { id: 136, nombre: "Carcasa iPhone 12", precio: 6990, descripcion: "Carcasa de silicona para iPhone 12, 12 Mini, 12 Pro y 12 Pro Max. Consulte por colores disponibles.", img: "assets/imagenes/iphone.jpg", tags: ['carcasa', 'iphone', 'iphone 12', 'silicona']  },
    ];
    this.aux = this.listaProductos;
  }


  pageMin = 0;
  pageMax = 6;
  pageSize = 6;
  carrito: Producto[] = [];
  totalDinero = 0;
  cantidad = new FormControl();
  buscarPalabra = new FormControl();
  productosCantidad = new Map();

  changePage(index: any) {
    this.pageMin = index * this.pageSize;
    this.pageMax = index * this.pageSize + this.pageSize;
  }

  agregarCarrito(producto: Producto) {
    if (this.carrito.includes(producto)) {
      //ya tiene el producto
      this.productosCantidad.set(producto.id, this.cantidad.value);
      this.totalDinero += producto.precio;
    } else {
      this.carrito.push(producto);
      this.productosCantidad.set(producto.id, 1);
      this.totalDinero += producto.precio;
    }
  }

  eliminarProducto(producto: Producto) {
    const index = this.carrito.indexOf(producto, 0);
    if (index > -1) {
      this.totalDinero -= producto.precio;
      this.carrito.splice(index,1);
    }
  }

  buscar() {
    let productosBuscados: Producto[] = [];
    if(this.buscarPalabra.value != "") {
      for (const prod of this.listaProductos) {
        if(prod.tags.find(tag => tag == this.buscarPalabra.value)) {
          productosBuscados.push(prod);
        }
      }
      this.listaProductos = productosBuscados;
    }
    if(productosBuscados.length==0){
      alert("No se encuentran productos")
      this.listaProductos = this.aux;
    }
  }

  quitarBusqueda() {
    this.listaProductos = this.aux;
  }

  carritoTieneProds() {
    if (this.carrito.length==0) {
      alert("Carrito Vacío!!");
    }
  }

  aceptarCantidad(producto: Producto) {

  }

}
