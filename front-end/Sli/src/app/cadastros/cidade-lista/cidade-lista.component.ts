import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';

@Component({
  selector: 'app-cidade-lista',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent implements OnInit {
  cidadesLista: Cidade[] = [];

  msgSucesso: String = "";
  msgErro: String = "";

  constructor(
    private service: CidadeService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.cidadesLista = response);
  }

  novoCadastro() { }
}
