import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg,  } from "@ionic/angular/standalone";
import { TrianguloEscaleno } from '../modelo/TrianguloEscaleno';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, FormsModule, CommonModule , IonImg, ]
})
export class TrianguloComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  perimetro: number | null = null;
  figuraSeleccionada: string | null = null

  constructor(){

  }
  ngOnInit(){}

  calcular() {
    const tri = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
    this.perimetro = tri.calcularPerimetro();
  }
}
