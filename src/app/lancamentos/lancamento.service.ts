import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = '';

  constructor(private http: HttpClientModule) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.lancamentosUrl}?resumo`)
    .toPromise()
    .then(response => {
      console.log(response.json())
    })
  }

}
