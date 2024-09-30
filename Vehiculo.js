// vehiculo.ts aca declaro la herencia, es la relacion que tienen las clases
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, anio, color) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
