import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  lancamentos = [
    {status: true, cidade: 'Compra de pão', estado: 'SP', nome: 'Padaroa do Jose' },
    {status: false, cidade: 'Venda de software', estado: 'RJ', nome: 'Atacado Brasil' },
    {status: true, cidade: 'Impostos', estado: 'MG', nome: 'Ministeria da roubalheira' },
    {status: true, cidade: 'Mensalidade da escola', estado: 'PR', nome: 'Escolha aprendiz' },
    {status: false, cidade: 'Venda de carro', estado: 'GO', nome: 'Mercedez cars' },
    {status: true, cidade: 'Mensalidade academia', estado: 'MT', nome: 'x ploud gym' }
 ];

}
