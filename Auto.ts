import { Vehiculo } from './Vehiculo.js';

export class Auto extends Vehiculo {
    private _puertas: number;
    private _tipo: string;

    constructor(patente: string, marca: string, modelo: string, anio: number, color: string, puertas: number, tipo: string) {
        super(patente, marca, modelo, anio, color);
        this._puertas = puertas;
        this._tipo = tipo;
    }

    public get puertas(): number {
        return this._puertas;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public static datosDeEjemplo(): Auto[] {
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
    }
}

