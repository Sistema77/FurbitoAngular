import { Injectable } from '@angular/core';
import { CLASIFICA } from './mock-Clasificacion';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {
  //Atributos
  private misEquipos = CLASIFICA;
  //Constructor
  constructor() { }
  //Metodo GET
  get Equipos() {return this.misEquipos}
}
