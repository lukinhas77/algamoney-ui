import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  title='algamoney-ui';

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2021, 7, 20), dataPagamento: null, valor: 4.55, pessoa: 'Padaroa do Jose' },
    {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2021, 7, 20), dataPagamento: new Date(2021, 7, 20), valor: 8000, pessoa: 'Atacado Brasil' },
    {tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2021, 7, 20), dataPagamento: new Date(2021, 7, 20), valor: 400, pessoa: 'Ministeria da roubalheira' },
    {tipo: 'DESPESA', descricao: 'Mensalidade da escola', dataVencimento: new Date(2021, 7, 20), dataPagamento: null, valor: 800, pessoa: 'Escolha aprendiz' },
    {tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2021, 7, 20), dataPagamento: null, valor: 20000, pessoa: 'Mercedez cars' },
    {tipo: 'DESPESA', descricao: 'Mensalidade academia', dataVencimento: new Date(2021, 7, 20), dataPagamento: null, valor: 700, pessoa: 'x ploud gym' }
 ];


}
