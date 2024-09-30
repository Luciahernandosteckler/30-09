import { Camion } from './Camion.js';
import { Auto } from './Auto.js';
import { Moto } from './Moto.js';
import { Vehiculo } from './Vehiculo.js';

export function mostrarLista(tipoSeleccionado) {
    const listaDiv = document.innerHTML('lista');
    listaDiv.innerHTML = ''; // Limpiar la lista previa

    let vehiculos = [];

    if (tipoSeleccionado === 'Camion') {
        vehiculos = Camion.datosDeEjemplo();
    } else if (tipoSeleccionado === 'Auto') {
        vehiculos = Auto.datosDeEjemplo();
    } else if (tipoSeleccionado === 'Moto') {
        vehiculos = Moto.datosDeEjemplo();
    }

    if (vehiculos.length > 0) {
        vehiculos.forEach(vehiculo => {
            const vehiculoDiv = document.createElement('div');
            vehiculoDiv.innerHTML = `
                <strong>ID:</strong> ${Vehiculo.patente}<br>
                <strong>Marca:</strong> ${Vehiculo.marca}<br>
                <strong>Modelo:</strong> ${Vehiculo.modelo}<br>
                <strong>Año:</strong> ${Vehiculo.anio}<br>
                <strong>Color:</strong> ${Vehiculo.color}<br>
                ${tipoSeleccionado === 'Camion' ? `<strong>Capacidad de carga:</strong> ${Vehiculo.capacidadCarga} kg<br><strong>Tipo de carga:</strong> ${Vehiculo.tipoCarga}` : ''}
                ${tipoSeleccionado === 'Auto' ? `<strong>Puertas:</strong> ${Vehiculo.puertas}<br><strong>Tipo:</strong> ${Vehiculo.tipo}` : ''}
                ${tipoSeleccionado === 'Moto' ? `<strong>Cilindrada:</strong> ${Vehiculo.cilindrada} cc<br><strong>Tipo:</strong> ${Vehiculo.tipo}` : ''}
            `;
            listaDiv.appendChild(vehiculoDiv);
        });
    } else {
        listaDiv.innerHTML = '<p>No hay vehículos para mostrar</p>';
    }
}

document.getElementById('mostrarLista').addEventListener('click', () => {
    const tipoSeleccionado = document.getElementById('tipoVehiculo').value;
    mostrarLista(tipoSeleccionado);
});

