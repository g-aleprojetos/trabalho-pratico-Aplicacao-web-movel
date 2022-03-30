import { Component, OnInit } from '@angular/core';
import { Dados } from './interfaceDados'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*Dados para criar o componente */
export class AppComponent implements OnInit {/*Usando o OnInit para carregar dos dados ao carregar a página  */

    dados: Dados[] = [];/*Variavel dados usando a interface Dados para modelar oa variável */
  /*Preenchimento dos dados para criar a tabela */
    ngOnInit(): void {
      this.dados = [
        {
          id: 1,
          nome: 'Alexandre dos Santos Gonçalves',
          ru: 3413992,
          curso: 'Tecnologia em Desenvolvimento de Aplicativos para Dispositivos Móveis',
          dataNascimento: '05/07/1978',
        }, {
          id: 2,
          nome: 'Nome 2',
          ru: 3277748,
          curso: 'Matemática',
          dataNascimento: '22/06/1996',
        },     {
          id: 3,
          nome: 'Nome 3',
          ru: 3277749,
          curso: 'Ciência de dados',
          dataNascimento: '27/03/1998',
        }, {
          id: 4,
          nome: 'Nome 4',
          ru: 3277750,
          curso: 'Matemática',
          dataNascimento: '13/07/1994',
        },     {
          id: 5,
          nome: 'nome 5',
          ru: 3277751,
          curso: 'Tecnologia em Desenvolvimento de Aplicativos para Dispositivos Móveis',
          dataNascimento: '30/09/1993',
        }
      ]
    }
  }