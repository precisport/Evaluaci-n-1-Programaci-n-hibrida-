import { Component, OnInit } from '@angular/core';
import { IonCard, IonLabel, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonImg,  } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //
import { Circulo } from '../modelo/circulo';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports:[IonButton, CommonModule, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, FormsModule ,IonInput, IonImg, ]
})
export class CirculoComponent implements OnInit{
  perimetro: boolean = false; 
  circulo: Circulo; 
  radio: string = ""; 
  resultado: string = "";
  figuraSeleccionada: string | null = null;

  constructor() {
    this.circulo = new Circulo(0);  // Inicializa el radio con 0
  }

  ngOnInit() {}
  

  calcularPerimetro() {
    const radioNumerico = Number(this.radio); //
    if (radioNumerico > 0) {
       this.resultado = (2 * Math.PI * radioNumerico).toFixed(2); // Calculamos el perímetro y lo fijamos a dos decimales this.perimetro = true; } else { this.perimetro = false;
      
    }
    this.perimetro =true;
}
}