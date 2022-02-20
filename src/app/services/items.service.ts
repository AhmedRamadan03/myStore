import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor( private fs: AngularFirestore, private firestoreg:AngularFireStorage,private as :AuthService) { }

  getAllItem(){
    return this.fs.collection('items').snapshotChanges()
  }

  addNewItem(name:string, price:number , image:File,description:string){
    return new Promise((resolve, reject) =>{
      let ref =this.firestoreg.ref('items/'+ image.name)
   ref.put(image).then( () => {
    ref.getDownloadURL().subscribe(photoUrl => {
      this.fs.collection('items').add({
        name,
        price,
        photoUrl,
        description  
      }).then( () => resolve())
    })
     
   })
    

    })
 
  }

  
  delete(id){
    return this.fs.doc(`items/${id}`).delete()
  }

  save(id, price){
    return this.fs.doc(`items/${id}`).update({
      price
    })
  }
  

}
