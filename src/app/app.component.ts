import { Component } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('router',[
      transition('0=>7 , 7=>0 , 5=>7 , 7=>5 , 7=>2, 7=>4 ,4=>7 , 2=>7 ,  0=>1, 0=>2 , 1=>7 , 7=>1, 0=>3 , 3=>7 , 7=>3, 0=>4 ,0=>5 , 5=>4 , 4=>5 , 5=>0 , 1=>0 , 2=>0 ,2=>4 , 4=>2  , 3=>0 ,4=>0, 5=>0 ,1=>3 , 3=>1 , 1=>5 , 5=>1 , 3=>5, 5=>3 ,3=>6 ,5=>2 , 2=>5' , [
       group([
        query(':enter',[
            style({
              transform:'translateX(100%)'
            }),
            animate(1500,style({
              transform:'translateX(0)'
            }))
        ]),
        query(':leave',[
          style({
            transform:'translateX(0)'
          }),
          animate(1500,style({
            transform:'translateX(-100%)'
          }))
        ])
       ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'myStore';


}
