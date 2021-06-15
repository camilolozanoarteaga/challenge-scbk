import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private ISLOGED_ITEM = 'isLoged';
  private isLoged: string = localStorage.getItem(this.ISLOGED_ITEM);

  loginForm: FormGroup;
  feedbackMessage: string = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern('^[a-z]+$')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    if (this.isLoged === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  get formlogin(): any {
    return this.loginForm.controls;
  }

  isInvalidFormGroupInput(inputName: string): boolean {
    return (
      this.loginForm.get(inputName).invalid &&
      (this.loginForm.get(inputName).dirty ||
        this.loginForm.get(inputName).touched)
    );
  }

  /**
   * user: "admin"
   * password: "admin123"
   */
  login(): void {
    this.feedbackMessage = null;

    if (
      this.loginForm.value.username === 'admin' &&
      this.loginForm.value.password === 'admin123'
    ) {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('isLoged', 'true');
    } else {
      this.feedbackMessage = 'Su usuario no existe.';
    }
  }
}
