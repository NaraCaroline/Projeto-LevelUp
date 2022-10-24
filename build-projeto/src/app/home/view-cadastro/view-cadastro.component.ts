import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-cadastro',
  templateUrl: './view-cadastro.component.html',
  styleUrls: ['./view-cadastro.component.css']
})
export class ViewCadastroComponent implements OnInit {
  cadastroForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      classe: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      formacao: new FormControl('', [Validators.required])
    })
  }

  get nome() {
    return this.cadastroForm.get('nome')!;
  }
  get user() {
    return this.cadastroForm.get('user')!;
  }
  get classe() {
    return this.cadastroForm.get('classe')!;
  }
  get senha() {
    return this.cadastroForm.get('senha')!;
  }
  get idade() {
    return this.cadastroForm.get('idade')!;
  }
  get formacao() {
    return this.cadastroForm.get('formacao')!;
  }

  submit() {
    if(this.cadastroForm.invalid){
      return;
    }

  console.log("Enviado!");
  }


}
