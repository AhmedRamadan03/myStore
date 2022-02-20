import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorsMessage : string =''
  constructor( private as:AuthService, private us: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  sigup(form){
   let data: user =form.value;
   this.as.signup(data.email,data.password)
   .then (result => {
     this.errorsMessage =''
     this.us.addNewUser(result.user.uid, data.name, data.address).then(()=>{
       this.router.navigate([''])


     })

   })
   .catch(err => {
     this.errorsMessage = err.message
   })
   

  }

}
