import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-module',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reactive-forms-module.component.html',
  styleUrl: './reactive-forms-module.component.css'
})
export class ReactiveFormsModuleComponent {
  userName : any = '';
  email : any = '';

  signInForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit(){
    alert("Details submitted successfully");
    this.signInForm.reset();
  }

  onTemplateSubmit(){
    alert("Details submitted successfully");
    this.email = '';
    this.userName = '';
  }



}
