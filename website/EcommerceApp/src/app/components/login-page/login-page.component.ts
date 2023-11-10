import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthenticationService,
     private renderer: Renderer2,
      private el: ElementRef,
       private router: Router,
       private toast:HotToastService) { }

  ngOnInit(): void { }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngAfterViewInit() {

    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('#container');


    this.renderer.listen(signUpButton, 'click', () => {
      this.renderer.addClass(container, 'right-panel-active');
    });

    this.renderer.listen(signInButton, 'click', () => {
      this.renderer.removeClass(container, 'right-panel-active');
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).pipe(
      this.toast.observe({
        success : "Logged in successfully",
        loading : "Logging in",
        error : "There was an eror"
      }
      )
    ).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

}
