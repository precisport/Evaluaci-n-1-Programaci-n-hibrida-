import { FiguraGeometrica } from './FiguraGeometrica';  
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(public lado1: number, public lado2: number, public lado3: number) {
        super ()
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
