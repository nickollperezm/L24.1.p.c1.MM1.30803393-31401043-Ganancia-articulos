export default class Cl_articulo {
    constructor(codigo, costo, precio) {
        this.codigo = codigo;
        this.costo = costo;
        this.precio = precio;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }

    set costo(costo) {
        this._costo = costo;
    }
    get costo() {
        return this._costo;
    }

    set precio(precio) {
        this._precio = precio;
    }
    get precio() {
        return this._precio;
    }

    ganancia() {
        return this.precio - this.costo;
    }
}