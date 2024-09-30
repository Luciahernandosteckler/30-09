// camion.ts
import { Vehiculo } from './Vehiculo';

export class Camion extends Vehiculo {
    private _cargaMaxima: number;
    private _tipoCarga: string;

    constructor(patente: string, marca: string, modelo: string, anio: number, color: string, cargaMaxima: number, tipoCarga: string) {
        super(patente, marca, modelo, anio, color);
        this._cargaMaxima = cargaMaxima;
        this._tipoCarga = tipoCarga;
    }

    public get cargaMaxima(): number {
        return this._cargaMaxima;
    }

    public get tipoCarga(): string {
        return this._tipoCarga;
    }

    public static datosDeEjemplo(): Camion[] {
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
    }
}

