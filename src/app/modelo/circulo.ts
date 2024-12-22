import { FiguraGeometrica } from './FiguraGeometrica';  


export class Circulo extends FiguraGeometrica {  
    constructor(public radio: number) {  
        super();  
        this.radio = radio;
    }  

    override calcularPerimetro(): number {  
        return 2 * Math.PI * this.radio;  
    }  
}