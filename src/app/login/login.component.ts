import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showErrorMessages = false;
  showSuccessMessages = false;

  formGroup = new FormGroup({
    email: new FormControl('',
    [Validators.pattern(/[^\s]*@[a-z0-9.-]*/i), Validators.required]),
    senha: new FormControl('', Validators.minLength(5))
  })

salvar(){
    console.log(this.formGroup.controls.email.invalid);
    console.log(this.formGroup.controls.senha.touched);
    
    if (this.formGroup.invalid) { 
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    console.log('Formulário válido');
    this.showSuccessMessages = true;

}
}
