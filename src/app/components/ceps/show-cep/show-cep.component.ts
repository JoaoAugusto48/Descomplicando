import { Component, Input, OnInit } from '@angular/core';
import { Cep } from '../ceps';
import { CepService } from '../cep.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-cep',
  templateUrl: './show-cep.component.html',
  styleUrls: ['./show-cep.component.css']
})
export class ShowCepComponent implements OnInit {

  code: Cep = {
    cep: '',
    logradouro: '',
    complemento: '',
    unidade: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: '',
    regiao: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
    // cep: '19973-174',
    // logradouro: 'Rua Rosalina Candida Franco',
    // complemento: 'até o número 150',
    // unidade: '',
    // bairro: 'Jardim Bela Vista',
    // localidade: 'Palmital',
    // uf: 'SP',
    // estado: 'São Paulo',
    // regiao: 'Sudeste',
    // ibge: '3535309',
    // gia: '5010',
    // ddd: '18',
    // siafi: '6807',
  }

  constructor(
    private service: CepService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  buscarCep() {
    if(this.code.cep.length == 8 || this.code.cep.length == 9){
      this.service.findByCEP(this.code.cep).subscribe(code => {
        this.code = code
      });
    }
  }

}
