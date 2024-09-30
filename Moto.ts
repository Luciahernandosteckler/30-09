import { Vehiculo } from './Vehiculo';

export class Moto extends Vehiculo {
    private _cilindrada: number;
    private _tipo: string;

    constructor(patente: string, marca: string, modelo: string, anio: number, color: string, cilindrada: number, tipo: string) {
        super(patente, marca, modelo, anio, color);
        this._cilindrada = cilindrada;
        this._tipo = tipo;
    }

    public get cilindrada(): number {
        return this._cilindrada;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public static datosDeEjemplo(): Moto[] {
        return [
            new Moto('MOTO001', 'Yamaha', 'YZF-R3', 2020, 'Blanca', 321, 'Deportiva'),
            new Moto('MOTO002', 'Kawasaki', 'Ninja 400', 2021, 'Verde', 399, 'Deportiva'),
            new Moto('MOTO003', 'Honda', 'CBR500R', 2019, 'Rojo', 471, 'Deportiva'),
            new Moto('MOTO004', 'Suzuki', 'GSX250R', 2020, 'Azul', 248, 'Deportiva'),
            new Moto('MOTO005', 'Ducati', 'Panigale V2', 2021, 'Rojo', 955, 'Deportiva'),
            new Moto('MOTO006', 'BMW', 'G310R', 2019, 'Negro', 313, 'Naked'),
            new Moto('MOTO007', 'KTM', '390 Duke', 2020, 'Naranja', 373, 'Naked'),
            new Moto('MOTO008', 'Harley-Davidson', 'Iron 883', 2021, 'Negro', 883, 'Cruiser'),
            new Moto('MOTO009', 'Triumph', 'Street Triple', 2019, 'Gris', 765, 'Naked'),
            new Moto('MOTO010', 'Royal Enfield', 'Himalayan', 2020, 'Blanco', 411, 'Adventure'),
            new Moto('MOTO011', 'Honda', 'CB500X', 2021, 'Rojo', 471, 'Adventure'),
            new Moto('MOTO012', 'Kawasaki', 'Versys 650', 2019, 'Verde', 649, 'Adventure'),
            new Moto('MOTO013', 'Yamaha', 'Tracer 900', 2020, 'Azul', 847, 'Adventure'),
            new Moto('MOTO014', 'BMW', 'F850GS', 2021, 'Negro', 853, 'Adventure'),
            new Moto('MOTO015', 'KTM', '1290 Super Duke R', 2019, 'Naranja', 1301, 'Naked'),
            new Moto('MOTO016', 'Ducati', 'Monster 821', 2020, 'Rojo', 821, 'Naked'),
            new Moto('MOTO017', 'Suzuki', 'V-Strom 650', 2021, 'Gris', 645, 'Adventure'),
            new Moto('MOTO018', 'Harley-Davidson', 'Sportster', 2019, 'Negro', 1200, 'Cruiser'),
            new Moto('MOTO019', 'Triumph', 'Bonneville', 2020, 'Verde', 1200, 'Cruiser'),
            new Moto('MOTO020', 'Royal Enfield', 'Classic 350', 2021, 'Marrón', 349, 'Cruiser'),
        ];
    }
}

