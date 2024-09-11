import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cidade } from '../model/cidade';

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
  ngOnInit(): void {
    this.geraLista();
  }

  cidadesLista: Cidade[] = [];

  msgSucesso: String = "";
  msgErro: String = "";

  novoCadastro() { }

  geraLista() { }
}
