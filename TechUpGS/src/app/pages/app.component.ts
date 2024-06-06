import { OceanDataService } from './../services/oceanData.service';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private oceanDataService: OceanDataService) {}

  title = 'TechUpGS';

  oceanData: OceanData[] = [];

  especie?: Especie;
  projetoConservacao?: ProjetoConservacao;
  oceanDataObj?: OceanData;

  region: string = ' ';

  specie: string = ' ';

  conservation: string = ' ';

  tempMin: number = 0;

  tempMax: number = 0;

  phMin: number = 0;

  phMax: number = 0;

  polution: string = ' ';

  pagina: number = 0;

  qtd: number = 0;

  async pesquisar() {
    const filtro = {
      region: this.region,
      specie: this.specie,
      conservation: this.conservation,
      tempMin: this.tempMin,
      tempMax: this.tempMax,
      phMin: this.phMin,
      phMax: this.phMax,
      polution: this.polution,
      pagina: this.pagina,
      qtd: this.qtd
    };
    // return (this.oceanData = await this.oceanDataService.getAll(filtro.region, filtro.specie, filtro.conservation, filtro.tempMin, filtro.tempMax, filtro.phMax, filtro.phMin,this.polution, filtro.pagina, filtro.qtd));
  }
}

export class Especie {
  nome: string;
  status: string;

  constructor(nome: string, status: string) {
    this.nome = nome;
    this.status = status;
  }
}
export class ProjetoConservacao {
  nomeProjeto: string;
  tipoProjeto: string;
  tipoParticipacao: string;

  constructor(
    nomeProjeto: string,
    tipoProjeto: string,
    tipoParticipacao: string
  ) {
    this.nomeProjeto = nomeProjeto;
    this.tipoProjeto = tipoProjeto;
    this.tipoParticipacao = tipoParticipacao;
  }
}

export class OceanData {
  regiao: string;
  temperaturaAgua: number;
  ph: number;
  nivelPoluicao: string;
  especie: Especie;
  projetoConservacao: ProjetoConservacao;

  constructor(
    regiao: string,
    temperaturaAgua: number,
    ph: number,
    nivelPoluicao: string,
    especie: Especie,
    projetoConservacao: ProjetoConservacao
  ) {
    this.regiao = regiao;
    this.temperaturaAgua = temperaturaAgua;
    this.ph = ph;
    this.nivelPoluicao = nivelPoluicao;
    this.especie = especie;
    this.projetoConservacao = projetoConservacao;
  }
}
