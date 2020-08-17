import { Metal } from '../metal'

export class PostTransitionMetal extends Metal{
    constructor(atomicNumber: number, atomicWeight: string, name: string, symbol: string, form: string){
        super(atomicNumber, atomicWeight, name, symbol, form);
    }
}