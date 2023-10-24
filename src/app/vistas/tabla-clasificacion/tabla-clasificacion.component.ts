import { Component } from '@angular/core';
import { ClasificacionService } from '../../clasificacion.service';
import { Clasificacion } from '../../mock-Clasificacion';

@Component({
  selector: 'app-tabla-clasificacion',
  templateUrl: './tabla-clasificacion.component.html',
  styleUrls: ['./tabla-clasificacion.component.css']
})
export class TablaClasificacionComponent {

  tablaClasificacion : Clasificacion[] = [];

  constructor(private clasifisvc : ClasificacionService){
    this.tablaClasificacion = this.clasifisvc.Equipos;
  }
}
