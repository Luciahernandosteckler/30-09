// vehiculo.ts aca declaro la herencia, es la relacion que tienen las clases

"use strict";

export class Vehiculo {
    public patente: string;
    public marca: string;
    public modelo: string;
    public anio: number;
    public color: string;

    constructor(patente: string, marca: string, modelo: string, anio: number, color: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}
