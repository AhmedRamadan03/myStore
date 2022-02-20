import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { shopping } from 'src/app/interfaces/shopping.interface';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/interfaces/user.interface';
import { tick } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  add:number =-1
  
  cart: Array<shopping> =[]
  orders:Array<user>=[]
 x =0;


  constructor(private fs:AngularFirestore, private cs : CartService,private us:AuthService ) { 
    
  }
 
  ngOnInit(): void {
    this.cs.getCart().subscribe ( cart => {
      this.cart = cart.map(shopping => {
        return {
          id :shopping.payload.doc.id,
          name : shopping.payload.doc.data()['name'],
          price : shopping.payload.doc.data()['price'],
          amount: shopping.payload.doc.data()['amount'],
          photoUrl : shopping.payload.doc.data()['photoUrl']
        }

        
      
      })
     
      
      


    })

  
  };
  

Total(){
    
    this.cart.forEach(item => {
      this.x +=( item.amount * item.pirce)
    })
}
  


  delete(index){
    this.cs.delete(this.cart[index].id)
    alert ("Are You Sure ?")

  }

  save(index){
    this.cs.save(this.cart[index].id,this.cart[index].amount)

  } 
}
