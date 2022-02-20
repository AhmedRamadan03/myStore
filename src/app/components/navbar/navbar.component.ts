import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isOpen :boolean = false;
isUser :boolean = false;
isAdmin:boolean = false
  constructor( private auth:AuthService,private userSer:UsersService) { }
 
  ngOnInit(): void {
    this.auth.user.subscribe(user =>{
      if(user) {
        this.isUser =true
        this.auth.userId = user.uid;
        this.userSer.getUserData().subscribe(data => {
          if(data['isAdmin']) this.isAdmin= true;
        })

      }
      else {
        this.isUser = false
        this.auth.userId =''
      }
   })
  }

  toggleNav(){
    this.isOpen = !this.isOpen;
  }

  logOut(){
    this.auth.logout().then(() =>{
      console.log('u make logout')

    })
  }
}
