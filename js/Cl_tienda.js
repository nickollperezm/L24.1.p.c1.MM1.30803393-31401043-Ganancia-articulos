export default class Cl_tienda {
    constructor() {
        this.acumGanancia = 0;
        this.mayorPrecio = 0;
        this.codigoMayor = 0;
    }

    procesarArticulo(articulo) {
        this.acumGanancia += articulo.ganancia();
        if (articulo.precio > this.mayorPrecio) {
            this.mayorPrecio = articulo.precio;
            this.codigoMayor = articulo.codigo;
        }
    }

    gananciaTotal() {
        return this.acumGanancia;
    }

    codigoPrecioMayor() {
        return this.codigoMayor;
    }
}