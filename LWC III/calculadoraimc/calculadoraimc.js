import { LightningElement, track } from 'lwc';

    export default class CalculadoraIMC extends LightningElement {
        @track nome;
        @track peso;
        @track altura;
        @track imc;

        handleNome(event) {
            this.nome = event.target.value;
        }

        handlePeso(event) {
            this.peso = event.target.value;
        }

        handleAltura(event) {
            this.altura = event.target.value;
        }

        calcularIMC() {
            const alturaMetros = this.altura / 100;
            const imc = this.peso / (alturaMetros * alturaMetros);
            this.imc = imc.toFixed(2);
        }
    }
