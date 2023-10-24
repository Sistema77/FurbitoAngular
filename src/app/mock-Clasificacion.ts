
export interface Clasificacion {
     equipo: string;
     partidosGanados: number;
     goles: number;
     empates: number;
     perdidos: number;
     golesFavor: number;
     golesEnContra: number;
}
export const CLASIFICA : Clasificacion[] = [
     {
          equipo: "Betis",
          partidosGanados: 33,
          goles: 70,
          empates: 5,
          perdidos: 0,
          golesFavor: 69,
          golesEnContra: 1
     },
     {
          equipo: "Sevilla",
          partidosGanados: 20,
          goles: 50,
          empates: 16,
          perdidos: 7,
          golesFavor: 15,
          golesEnContra: 35
     },
     {
          equipo: "Madrid",
          partidosGanados: 25,
          goles: 60,
          empates: 9,
          perdidos: 6,
          golesFavor: 20,
          golesEnContra: 40
     },
     {
          equipo: "Barcelona",
          partidosGanados: 1,
          goles: 5,
          empates: 9,
          perdidos: 70,
          golesFavor: 2,
          golesEnContra: 68
     }
];
