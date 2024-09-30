"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Vehiculos_1 = require("./Vehiculos");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(patente, marca, modelo, anio, color, puertas, tipo) {
        var _this = _super.call(this, patente, marca, modelo, anio, color) || this;
        _this._puertas = puertas;
        _this._tipo = tipo;
        return _this;
    }
    Object.defineProperty(Auto.prototype, "puertas", {
        get: function () {
            return this._puertas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        enumerable: false,
        configurable: true
    });
    Auto.datosDeEjemplo = function () {
        return [
            new Auto('ABC123', 'Toyota', 'Corolla', 2020, 'Rojo', 4, 'Sedán'),
            new Auto('DEF456', 'Ford', 'Fiesta', 2019, 'Azul', 5, 'Hatchback'),
            new Auto('GHI789', 'Volkswagen', 'Polo', 2021, 'Negro', 5, 'Sedán'),
            new Auto('JKL012', 'Chevrolet', 'Onix', 2020, 'Blanco', 5, 'Hatchback'),
            new Auto('MNO345', 'Nissan', 'Versa', 2021, 'Gris', 4, 'Sedán'),
            new Auto('PQR678', 'Kia', 'Rio', 2020, 'Rojo', 5, 'Hatchback'),
            new Auto('STU901', 'Hyundai', 'Accent', 2019, 'Plata', 5, 'Sedán'),
            new Auto('VWX234', 'Peugeot', '208', 2021, 'Azul', 5, 'Hatchback'),
            new Auto('YZA567', 'Renault', 'Clio', 2020, 'Verde', 5, 'Sedán'),
            new Auto('BCD890', 'Fiat', 'Punto', 2019, 'Negro', 5, 'Hatchback'),
            new Auto('EFG123', 'Mazda', '2', 2021, 'Blanco', 5, 'Sedán'),
            new Auto('HIJ456', 'Subaru', 'Impreza', 2020, 'Rojo', 5, 'Sedán'),
            new Auto('KLM789', 'Honda', 'Civic', 2019, 'Gris', 5, 'Sedán'),
            new Auto('NOP012', 'Toyota', 'Camry', 2021, 'Azul', 5, 'Sedán'),
            new Auto('QRS345', 'Mitsubishi', 'Mirage', 2020, 'Plata', 5, 'Hatchback'),
            new Auto('TUV678', 'Volkswagen', 'Jetta', 2019, 'Blanco', 5, 'Sedán'),
            new Auto('WXY901', 'Peugeot', '301', 2021, 'Negro', 5, 'Sedán'),
            new Auto('ZAB234', 'Ford', 'Focus', 2020, 'Rojo', 5, 'Hatchback'),
            new Auto('CDE567', 'Chevrolet', 'Cruze', 2019, 'Gris', 5, 'Sedán'),
            new Auto('FGH890', 'Nissan', 'Leaf', 2021, 'Azul', 5, 'Hatchback'),
            new Auto('IJK123', 'Hyundai', 'Elantra', 2020, 'Verde', 5, 'Sedán'),
        ];
    };
    return Auto;
}(Vehiculos_1.Vehiculo));
exports.Auto = Auto;
