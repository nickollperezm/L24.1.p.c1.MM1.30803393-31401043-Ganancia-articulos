/*
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.

El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 333 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)

Ganancia Total: 85$
Código del artículo con mayor precio de venta:444
*/

import Cl_articulo from "./Cl_articulo.js";
import Cl_tienda from "./Cl_tienda.js";

let tienda = new Cl_tienda();
let articulo1 = new Cl_articulo(888, 10, 15);
let articulo2 = new Cl_articulo(777, 20, 25);
let articulo3 = new Cl_articulo(999, 15, 25);
let articulo4 = new Cl_articulo(333, 25, 35);
let articulo5 = new Cl_articulo(111, 50, 70);
let articulo6 = new Cl_articulo(333, 40, 50);
let articulo7 = new Cl_articulo(444, 80, 100);
let articulo8 = new Cl_articulo(222, 5, 10);
tienda.procesarArticulo(articulo1);
tienda.procesarArticulo(articulo2);
tienda.procesarArticulo(articulo3);
tienda.procesarArticulo(articulo4);
tienda.procesarArticulo(articulo5);
tienda.procesarArticulo(articulo6);
tienda.procesarArticulo(articulo7);
tienda.procesarArticulo(articulo8);

let salida = document.getElementById("salida");
salida.innerHTML = `
Ganancia Total: ${tienda.gananciaTotal()}$
<br>Código del artículo con mayor precio de venta: ${tienda.codigoPrecioMayor()}
`;