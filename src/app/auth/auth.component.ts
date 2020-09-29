import { Component, OnInit } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  error: string = null;
  isLoading = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      //
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (errorMessage) => {
          console.error(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );

      form.reset();
    }
  }
}
