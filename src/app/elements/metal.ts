import { Element } from './element';

export abstract class Metal extends Element{
    constructor(atomicNumber: number, atomicWeight: string, name: string, symbol: string, form: string){
        super(atomicNumber, atomicWeight, name, symbol, form);
    }
}