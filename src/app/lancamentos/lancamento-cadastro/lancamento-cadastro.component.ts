import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
      {label: 'Receita', value: 'RECEITA'},
      {label: 'Despesa', value: 'DESPESA'}
    
  ]

  categorias = [
    {name: 'Alimentação', value: 1},
    {name: 'Transporte', value: 2}
  ]

  pessoas = [
    {name: 'Jao', value: 1},
    {name: 'Lucas', value: 2}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
