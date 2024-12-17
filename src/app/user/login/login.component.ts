import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmitted : boolean = false;
  constructor(public formBuilder : FormBuilder) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  },);
  hasDislayableError(controlName: string) : Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      console.log(this.form.value);

    }
  }
}
