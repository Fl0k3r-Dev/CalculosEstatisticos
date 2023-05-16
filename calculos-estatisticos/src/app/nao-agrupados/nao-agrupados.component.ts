import { Component } from '@angular/core';

@Component({
  selector: 'app-nao-agrupados',
  templateUrl: './nao-agrupados.component.html',
  styleUrls: ['./nao-agrupados.component.sass']
})
export class NaoAgrupadosComponent {

  public soma !: number;
  public mediana !: number;
  public variancia !: number;

  calcularSoma(numeros: number[]): number {
    let soma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    return soma;
  }
  
  calcularMediana(numeros: number[]): number {
    const sortedNumeros = numeros.slice().sort((a, b) => a - b);
    const meio = Math.floor(sortedNumeros.length / 2);
  
    if (sortedNumeros.length % 2 === 0) {
      return (sortedNumeros[meio - 1] + sortedNumeros[meio]) / 2;
    } else {
      return sortedNumeros[meio];
    }
  }
  
  calcularVariancia(numeros: number[]): number {
    const media = this.calcularSoma(numeros) / numeros.length;
    let somaDiferencasQuadrado = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      const diferenca = numeros[i] - media;
      somaDiferencasQuadrado += diferenca * diferenca;
    }
  
    return somaDiferencasQuadrado / numeros.length;
  }
  
  calculaNumeros(numeros:number[]){
    this.soma = this.calcularSoma(numeros);
    this.mediana = this.calcularMediana(numeros);
    this.variancia = this.calcularVariancia(numeros);
  }

}
