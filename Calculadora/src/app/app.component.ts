import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora';

  // Variables sin limite de alcance
  pantalla: string = '';
  num1: number = 0;
  num2: number = 0;
  operator: string = '';
  result: number = 0;
  estado = false;

  constructor() {
    this.pantalla = '';
    this.num1 = 0;
    this.num2 = 0;
    this.operator = '';
    this.result = 0;
    this.estado = false;
  }

  uno() {
    // this.pantalla.innerHTML += "1";
    this.anyadirNum1(1);
  }

  dos() {
    // pantalla.innerHTML += "2";
    this.anyadirNum1(2);
  }

  tres() {
    // pantalla.innerHTML += "3";
    this.anyadirNum1(3);
  }

  cuatro() {
    // pantalla.innerHTML += "4";
    this.anyadirNum1(4);
  }

  cinco() {
    // pantalla.innerHTML += "5";
    this.anyadirNum1(5);
  }

  seis() {
    // pantalla.innerHTML += "6";
    this.anyadirNum1(6);
  }

  siete() {
    // pantalla.innerHTML += "7";
    // this.anyadirNum1(7);
  }

  ocho() {
    // pantalla.innerHTML += "8";
    this.anyadirNum1(8);
  }

  nueve() {
    // pantalla.innerHTML += "9";
    this.anyadirNum1(9);
  }
  cero() {
    // pantalla.innerHTML += "0";
    this.anyadirNum1(0);
  }
  borrarC() {
    // pantalla.innerHTML = " ";
    this.num1 = 0;
    this.num2 = 0;
    this.estado = false;
  }

  borrarCE() {
    // this.pantalla.innerHTML = " ";
    this.num1 = 0;
    this.num2 = 0;
    this.estado = false;
    this.operator = '';
  }

  mas() {
    // var suma1 = document.getElementById("pantalla").value;
    // pantalla.innerHTML = " ";
    this.operator = '+';
    this.estado = true;
    console.log('Estado ' + this.estado);
  }

  menos() {
    // var resta1 = document.getElementById("pantalla").value;
    // pantalla.innerHTML = " ";
    this.operator = '-';
    this.estado = true;
  }

  por() {
    // var factor1 = document.getElementById("pantalla").value;
    // this.pantalla.innerHTML = " ";
    this.operator = '*';
    this.estado = true;
  }

  entre() {
    // var dividendo = document.getElementById("pantalla").value;
    // pantalla.innerHTML = " ";
    this.operator = '/';
    this.estado = true;
  }

  igual() {
    /* Realizar la operacion */
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
    // pantalla.innerHTML = result;
  }

  anyadirNum1(valor: number) {

    let valorS:string = valor.toString();

    if (this.estado == false) {
      if (this.num1 == null) {
        this.num1 = valor;
        console.log("Num1"+this.num1);
        console.log(valor);

        this.pantalla = valorS;

        // this.pantalla = this.num1.toString();
        console.log(this.pantalla);

      } else {
        this.num1 = this.num1 + valor;
        let temporal = this.num1.toString() + valor.toString();
        console.log(temporal);
        // this.pantalla += temporal.toString();

      }
    } else {
      if (this.num2 == null) {
        this.num2 = valor;
        // this.pantalla += this.num2.toString();
      } else {
        this.num2 = this.num2 + valor;
        // this.pantalla += this.num2.toString();
      }
    }
  }
}
