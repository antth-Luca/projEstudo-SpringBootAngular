import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cidade-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent {
  msgSucesso: String = "Cidade registrada com sucesso!";
  msgErro: String = "Não foi possível registrar esta cidade!";
}
