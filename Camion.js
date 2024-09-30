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
exports.Camion = void 0;
// camion.ts
var Vehiculos_1 = require("./Vehiculos");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(patente, marca, modelo, anio, color, cargaMaxima, tipoCarga) {
        var _this = _super.call(this, patente, marca, modelo, anio, color) || this;
        _this._cargaMaxima = cargaMaxima;
        _this._tipoCarga = tipoCarga;
        return _this;
    }
    Object.defineProperty(Camion.prototype, "cargaMaxima", {
        get: function () {
            return this._cargaMaxima;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "tipoCarga", {
        get: function () {
            return this._tipoCarga;
        },
        enumerable: false,
        configurable: true
    });
    Camion.datosDeEjemplo = function () {
        return [
            new Camion('CAMION001', 'Volvo', 'FH', 2018, 'Blanco', 10000, 'Carga seca'),
            new Camion('CAMION002', 'Mercedes-Benz', 'Actros', 2020, 'Negro', 12000, 'Refrigerada'),
            new Camion('CAMION003', 'Scania', 'R', 2019, 'Rojo', 15000, 'Carga seca'),
            new Camion('CAMION004', 'MAN', 'TGS', 2021, 'Gris', 18000, 'Carga seca'),
            new Camion('CAMION005', 'Iveco', 'Stralis', 2020, 'Azul', 16000, 'Refrigerada'),
            new Camion('CAMION006', 'Renault', 'T', 2019, 'Blanco', 14000, 'Carga seca'),
            new Camion('CAMION007', 'DAF', 'XF', 2021, 'Negro', 17000, 'Carga seca'),
            new Camion('CAMION008', 'Freightliner', 'Cascadia', 2020, 'Rojo', 20000, 'Carga seca'),
            new Camion('CAMION009', 'Kenworth', 'T680', 2018, 'Gris', 19000, 'Carga seca'),
            new Camion('CAMION010', 'Peterbilt', '579', 2019, 'Azul', 21000, 'Carga seca'),
            new Camion('CAMION011', 'Isuzu', 'FVR', 2020, 'Blanco', 12000, 'Carga seca'),
            new Camion('CAMION012', 'Hino', '700', 2021, 'Negro', 15000, 'Refrigerada'),
            new Camion('CAMION013', 'Mack', 'Anthem', 2020, 'Rojo', 16000, 'Carga seca'),
            new Camion('CAMION014', 'Volvo', 'VNL', 2021, 'Gris', 17000, 'Refrigerada'),
            new Camion('CAMION015', 'Freightliner', 'M2', 2019, 'Blanco', 13000, 'Carga seca'),
            new Camion('CAMION016', 'International', 'ProStar', 2020, 'Negro', 19000, 'Carga seca'),
            new Camion('CAMION017', 'Kenworth', 'T800', 2021, 'Rojo', 18000, 'Carga seca'),
            new Camion('CAMION018', 'Peterbilt', '389', 2022, 'Gris', 20000, 'Carga seca'),
            new Camion('CAMION019', 'Iveco', 'Daily', 2020, 'Azul', 14000, 'Refrigerada'),
            new Camion('CAMION020', 'Scania', 'P', 2021, 'Blanco', 16000, 'Carga seca'),
        ];
    };
    return Camion;
}(Vehiculos_1.Vehiculo));
exports.Camion = Camion;
