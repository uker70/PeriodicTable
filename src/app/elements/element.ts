export abstract class Element{
    atomicNumber: number;
    atomicMass: string;
    name: string;
    symbol: string;
    groupBlock: string;

    constructor(atomicNumber: number, atomicMass: string, name: string, symbol: string, groupBlock: string){
        this.atomicNumber = atomicNumber;
        this.atomicMass = atomicMass;
        this.name = name;
        this.symbol = symbol;
        this.groupBlock = groupBlock;
    }
}