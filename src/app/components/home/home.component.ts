import { Component, OnInit, OnDestroy } from '@angular/core';
import { menu } from 'src/app/interfaces/menu.interface';
import { ItemsService } from 'src/app/services/items.service';
import { Subscribable, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, group, query, animate, style } from '@angular/animations';
import { image } from 'src/app/interfaces/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger("fadeIn",[
      transition('void => *' , [
  
            style({
              opacity:0,
              transform:'translateY(100%)'
            }),
            animate(2000,style({
              opacity:1,
              transform:'translateY(0)'
            }))
        
    ])
  ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  myPhoto :Array<image>=[
    {photoUrl : "assets/imags/about/instgram/1.png"},
    {photoUrl : "assets/imags/about/instgram/2.png"},
    {photoUrl : "assets/imags/about/instgram/3.png"},
    {photoUrl : "assets/imags/about/instgram/4.png"},
    {photoUrl : "assets/imags/about/instgram/5.png"},
    {photoUrl : "assets/imags/about/instgram/6.png"},
  ]
   items: Array<menu> = [];
   itemsObservable: Subscription
   add:number =-1
   
  constructor( private gs :ItemsService, private cs :CartService,private authuser:AuthService,private route:Router) { }

  ngOnInit(): void {
    /** to get data from firebase */
    this.itemsObservable= this.gs.getAllItem().subscribe(data => {
      this.items = data.map(element => {
        return {
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'],
          price: element.payload.doc.data()['price'],
          photoUrl: element.payload.doc.data()['photoUrl'],
          description: element.payload.doc.data()['description']
          
        }
      })
    })
  }
  ngOnDestroy(){
    this.itemsObservable.unsubscribe()

  }

  addToCart(index:number){
     if(this.authuser.userId) this.add = +index;
     else this.route.navigate(['login']);

  }

  buy(amount:number){
    let selectedItem = this.items[this.add]
    let data ={
      name : selectedItem.name,
      amount : +amount,
      price : selectedItem.price,
      photoUrl: selectedItem.photoUrl
    }
    this.cs.addToCart(data).then( () => this.add = -1)
    


  }

 
}
