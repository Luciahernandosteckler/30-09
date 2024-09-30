"use strict";
//Ejercicio:
//implementar la clase RegistroAutomor (autios, motos, camiones) y deben tener los metodos:
//AgregarVehiculo, get y set, modificar un vehiculo, dar de baja
//incorporando los conceptos: encapsulamiento y composicion
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        var _a, _b, _c;
        this._vehiculos = [];
        (_a = this._vehiculos).push.apply(_a, Auto_1.Auto.datosDeEjemplo());
        (_b = this._vehiculos).push.apply(_b, Moto_1.Moto.datosDeEjemplo());
        (_c = this._vehiculos).push.apply(_c, Camion_1.Camion.datosDeEjemplo());
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        if (!this._vehiculos.some(function (v) { return v.patente === vehiculo.patente; })) {
            this._vehiculos.push(vehiculo);
        }
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patente) {
        var index = this._vehiculos.findIndex(function (v) { return v.patente === patente; });
        if (index !== -1) {
            this._vehiculos.splice(index, 1);
        }
    };
    Object.defineProperty(RegistroAutomotor.prototype, "vehiculos", {
        get: function () {
            // Devolver una copia de la lista de vehículos usando el operador spread
            return this._vehiculos.map(function (vehiculo) { return (__assign({}, vehiculo)); });
        },
        enumerable: false,
        configurable: true
    });
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, params) {
        var vehiculo = this._vehiculos.find(function (v) { return v.patente === patente; });
        if (vehiculo) {
            Object.assign(vehiculo, params);
            return vehiculo;
        }
        return null;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
// Ejemplo 
var registro = new RegistroAutomotor();
// Agregar un nuevo vehículo
var nuevoAuto = new Auto_1.Auto('NUEVA123', 'Ford', 'Fiesta', 2023, 'Verde', 4, 'Hatchback');
registro.agregarVehiculo(nuevoAuto);
// Mostrar la lista de vehículos
function mostrarListaVehiculos() {
    console.log('Lista de vehículos:', registro.vehiculos);
}
// Modificar un vehículo
var vehiculoModificado = registro.modificarVehiculo('NUEVA123', { color: 'Rojo', modelo: 'Focus' });
// Mostrar el resultado de la modificación
function mostrarVehiculoModificado() {
    if (vehiculoModificado) {
        console.log('Vehículo modificado:', vehiculoModificado);
    }
    else {
        console.log('Vehículo no encontrado');
    }
}
// Ejecutar las funciones de mostrar
mostrarListaVehiculos();
mostrarVehiculoModificado();
mostrarListaVehiculos();
