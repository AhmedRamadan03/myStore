import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fs: AngularFirestore, private as :AuthService) { }
  
  getAllOrder(){
    return this.fs.collection('orders').snapshotChanges()
  }



}
