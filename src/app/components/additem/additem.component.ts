import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { menu } from 'src/app/interfaces/menu.interface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  
  @ViewChild('image') photo:ElementRef

  constructor( private itemser:ItemsService) { }

  ngOnInit(): void { 
  }

  addNewItem(form :NgForm){
    let name =(<menu>form.value).name,
    price = (<menu>form.value).price,
    description = (<menu>form.value).description,
    image = (<HTMLInputElement>this.photo.nativeElement).files[0]
    this.itemser.addNewItem(name,price,image,description).then(msg => console.log(msg))

  }

}
