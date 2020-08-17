import { NonMetals } from '../nonmetals'

export class HalogensNonmetal extends NonMetals{
    constructor(atomicNumber: number, atomicWeight: string, name: string, symbol: string, form: string){
        super(atomicNumber, atomicWeight, name, symbol, form);
    }
}