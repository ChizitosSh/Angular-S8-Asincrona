import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's8-asincrona';

  nombre!: string;
  apellido!: string;
  edad!: number;

  message!: string;
  bienvenido!: string;

  datos!: [string, string, any];

  mostrar: boolean = false

  Verificar(edad:any) {
    if(edad > 18) {
      this.message = 'Mayor de edad';
      this.bienvenido = `Bienvenido ${this.nombre} ${this.apellido}`;
      this.datos = [this.nombre, this.apellido, this.edad];

      this.mostrar = true;
    } else {
      this.message = 'Menor de edad'
      this.bienvenido = '';
      this.datos = ['','',''];
    }
  }
}
