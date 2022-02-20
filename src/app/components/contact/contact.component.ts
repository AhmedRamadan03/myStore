import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { order } from 'src/app/interfaces/order.interface';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { user } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
users: Array<user>=[]
itemsObservable: Subscription
 
 constructor( private ur :UsersService,private us:AuthService, private orSer :OrderService,private route: Router) { }


 ngOnInit(): void {
 }
}
