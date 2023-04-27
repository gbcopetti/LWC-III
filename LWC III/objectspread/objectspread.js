import { LightningElement, track } from 'lwc';

export default class CadastroCliente extends LightningElement {
    @track firstName;
    @track surename;
    @track email;
    @track website;
    @track company;
    @track annualRevenue;

    handleInputChange(event) {  //isso é ativado quando ocorre mudança nos campos de input

        //pegar o nome do campo && o valor que o usuário inseriu
        const fieldName = event.target.dataset.field;
        const fieldValue = event.target.value;

        //com o nome do campo e o valor nas nossas garrinhas, usamos isso para atualizar as variáveis
        //e colocar nelas o valor que o usuario inseriu (value)    
        this[fieldName] = fieldValue;

        //agora criamos o objeto cliente e usamos o operador SPREAD (...), que cria uma cópia do this, que representa
        //a classe que estou trabalhando (no caso, CadastroCliente) 
        const cliente = { ...this };

        //exibir o objeto com os dados no console
        console.log(cliente); 
    }
}