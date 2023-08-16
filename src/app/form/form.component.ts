import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  usuarios: any[] = [
    { id: 1, nome: 'João', sobrenome: 'Silva', cpf: '111.111.111-11', idade: 25, endereco: 'Rua A, 123' },
    { id: 2, nome: 'Maria', sobrenome: 'Santos', cpf: '222.222.222-22', idade: 30, endereco: 'Rua B, 456' },
    { id: 3, nome: 'Pedro', sobrenome: 'Souza', cpf: '333.333.333-33', idade: 22, endereco: 'Av. C, 789' },
    { id: 4, nome: 'Ana', sobrenome: 'Ferreira', cpf: '444.444.444-44', idade: 50, endereco: 'Rua D, 101' },
    { id: 5, nome: 'Carlos', sobrenome: 'Oliveira', cpf: '555.555.555-55', idade: 35, endereco: 'Rua E, 111' },
    { id: 6, nome: 'Mariana', sobrenome: 'Almeida', cpf: '666.666.666-66', idade: 27, endereco: 'Rua F, 222' },
    { id: 7, nome: 'Rafael', sobrenome: 'Ribeiro', cpf: '777.777.777-77', idade: 20, endereco: 'Av. G, 333' },
    { id: 8, nome: 'Sofia', sobrenome: 'Martins', cpf: '888.888.888-88', idade: 74, endereco: 'Rua H, 444' }
  ];

  clientes: any[] = [];
  proximoId: number = 1; // Inicializa o próximo ID como 1


  cadastrarUsuario(nome: string, sobrenome: string, cpf: string, idade: string, endereco: string) {
    const novoUsuario = {
      id: this.proximoId,
      nome,
      sobrenome,
      cpf,
      idade: parseInt(idade, 10),
      endereco
    };

    this.usuarios.push(novoUsuario);
    this.proximoId++;

  }

  obterUsuariosMaisVelhos() {
    this.clientes =  this.usuarios.filter(usuario => usuario.idade > 60);
    /* location.reload(); */
    return this.clientes
    
  }
}
