import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../services/cidade.service';
import { Cidade } from '../model/cidade';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cidade-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit {
  id: number;
  cidade: Cidade;

  sucesso: boolean = false;
  erro: boolean = false;

  constructor(
    private service: CidadeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.cidade = new Cidade();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activateRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getById(this.id).subscribe(response => this.cidade = response);
      }
    })
  }

  onSubmit() { }

  voltarListagem() {
    this.router.navigate(['lista-cidades/']);
  }
}
