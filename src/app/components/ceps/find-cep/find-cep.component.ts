import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../ceps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inf-cep',
  templateUrl: './find-cep.component.html',
  styleUrls: ['./find-cep.component.css']
})
export class FindCepComponent implements OnInit {

  localidade = {
    estado: 'SP',
    cidade: 'Palmital',
    logradouro: ''
  }

  listaCep: Cep[] = [];

  constructor(
    private service: CepService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  findCeps() {
    if(this.localidade.logradouro.length >= 3) {
      this.service.findByUfCidadeRua(this.localidade.estado, this.localidade.cidade, this.localidade.logradouro)
        .subscribe((listaCep) => {
          this.listaCep = listaCep;
      })
    }
  }

  showCep(cep: string) {
    this.service.findByCEP(cep).subscribe((code) => {
      this.router.navigate(['/showCep'], {state: { code }})
    })
  }

}
