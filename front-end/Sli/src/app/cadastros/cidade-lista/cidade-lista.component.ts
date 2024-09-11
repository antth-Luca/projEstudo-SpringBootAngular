import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
export class CidadeListaComponent {
  msgSucesso: String = "";
  msgErro: String = "";
}
