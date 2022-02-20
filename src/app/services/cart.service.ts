import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { menu } from '../interfaces/menu.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { AuthService } from './auth.service';
import { order } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private fs:AngularFirestore, private as :AuthService) { }

  addToCart(data:menu){

    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }

  addToOreder(data:order){

    return this.fs.collection(`orders/`).add(data)
  }

  getCart(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()

  }

  delete(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

  save(id, amount){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount
    })
  }
}
