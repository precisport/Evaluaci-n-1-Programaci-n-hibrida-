import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonItem,  
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    CommonModule, 
    FormsModule, 
    IonSelect, 
    IonSelectOption, 
    CirculoComponent, 
    TrianguloComponent
  ],
})
export class HomePage { 
  figuraSeleccionada: string | null = null;

  constructor() {}
}
