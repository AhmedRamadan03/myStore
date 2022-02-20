import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }

  
  ngOnInit(): void {
  }
  login(form){
    let data = form.value;
    this.as.login(data.email , data.password)
    .then (result => this.router.navigate(['']))
    .catch(err => console.log(err))
    

  }
  goToSiginUp(){

    this.router.navigate(['signup'])
  }
}
