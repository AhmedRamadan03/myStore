import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private fs:AngularFirestore,private as:AuthService) { }

  addNewUser(id,name , address){
    return this.fs.doc('users/' + id).set({
      name :name,
      address : address,
    

    })

  }

  getUserData(){
    return this.fs.doc('users/'+ this.as.userId).valueChanges()
  }
  getUserData1(){
    return this.fs.doc('users/'+this.as.userId).valueChanges();
  };
}
