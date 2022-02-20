import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemsService } from 'src/app/services/items.service';
import { menu } from 'src/app/interfaces/menu.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Array<menu> = [];
   itemsObservable: Subscription
   add:number =-1
  constructor( private gs :ItemsService, private cs :CartService,private route: Router) { }

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
     this.add = +index
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

  
  goToAdd(){
    this.route.navigate(['additem'])

  }

  delete(index){
    this.gs.delete(this.items[index].id)
    alert ("Are You Sure ?")

  }

  save(index){
    this.gs.save(this.items[index].id,this.items[index].price)

  }

}
