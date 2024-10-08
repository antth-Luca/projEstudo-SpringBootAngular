import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';

@Component({
  selector: 'app-cidade-lista',
  standalone: true,
  imports: [
    CommonModule,  // Módulo para diretivas Angular;
    FormsModule  // Módulo para Data Binding.
  ],
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent implements OnInit {
  cidadesLista: Cidade[] = [];
  cidadeSelecionada: Cidade = new Cidade();

  msgSucesso: String = "";
  msgErro: String = "";

  constructor(
    private service: CidadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.cidadesLista = response);
  }

  selecionar_cidade(cidade: Cidade) {
    this.cidadeSelecionada = cidade;
  }

  deletar() {
    this.service.delete(this.cidadeSelecionada).subscribe(response => {
      this.msgSucesso = "Cidade deletada!";
      this.ngOnInit();
    },
    erro => this.msgErro = "Falha na deleção da cidade."
  )
  }

  novoCadastro() {
    this.router.navigate(['/nova-cidade']);
  }

  editarCadastro(id: number) {
    this.router.navigate([`/editar-cidade/${id}`]);
  }
}
