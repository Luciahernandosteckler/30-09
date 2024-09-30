//Ejercicio:
//implementar la clase RegistroAutomor (autios, motos, camiones) y deben tener los metodos:
//AgregarVehiculo, get y set, modificar un vehiculo, dar de baja
//incorporando los conceptos: encapsulamiento y composicion

// registroAutomotor.ts

import { Vehiculo } from './Vehiculo';
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

export class RegistroAutomotor {
    private _vehiculos: Vehiculo[] = [];

    constructor() {
        this._vehiculos.push(...Auto.datosDeEjemplo());
        this._vehiculos.push(...Moto.datosDeEjemplo());
        this._vehiculos.push(...Camion.datosDeEjemplo());
    }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        if (!this._vehiculos.some(v => v.patente === vehiculo.patente)) {
            this._vehiculos.push(vehiculo);
        }
    }

    public eliminarVehiculo(patente: string): void {
        const index = this._vehiculos.findIndex(v => v.patente === patente);
        if (index !== -1) {
            this._vehiculos.splice(index, 1);
        }
    }

    public get vehiculos(): Vehiculo[] {
        // Devolver una copia de la lista de vehículos usando el operador spread
        return this._vehiculos.map(vehiculo => ({ ...vehiculo }));
    }

    public modificarVehiculo(patente: string, params: Partial<Omit<Vehiculo, 'patente'>>): Vehiculo | null {
        const vehiculo = this._vehiculos.find(v => v.patente === patente);
        if (vehiculo) {
            Object.assign(vehiculo, params);
            return vehiculo;
        }
        return null;
    }
}

// Ejemplo 
const registro = new RegistroAutomotor();

// Agregar un nuevo vehículo
const nuevoAuto = new Auto('NUEVA123', 'Ford', 'Fiesta', 2023, 'Verde', 4, 'Hatchback');
registro.agregarVehiculo(nuevoAuto);

// Mostrar la lista de vehículos
function mostrarListaVehiculos() {
    console.log('Lista de vehículos:', registro.vehiculos);
}

// Modificar un vehículo
const vehiculoModificado = registro.modificarVehiculo('NUEVA123', { color: 'Rojo', modelo: 'Focus' });

// Mostrar el resultado de la modificación
function mostrarVehiculoModificado() {
    if (vehiculoModificado) {
        console.log('Vehículo modificado:', vehiculoModificado);
    } else {
        console.log('Vehículo no encontrado');
    }
}

// Ejecutar las funciones de mostrar

mostrarListaVehiculos();
mostrarVehiculoModificado();
mostrarListaVehiculos(); 
