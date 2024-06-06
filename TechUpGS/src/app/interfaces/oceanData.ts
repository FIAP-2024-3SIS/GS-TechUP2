export interface OceanData {
  regiao: string;
  temperaturaAgua: number;
  ph: number;
  nivelPoluicao: string;
  especie: Especie;
  projetoConservacao: ProjetoConservacaoao;
}

export interface Especie {
  nome: string;
  status: string;
}
export interface ProjetoConservacaoao {
  nomeProjeto: string;
  tipoProjeto: string;
  tipoParticipacao: string;
}
