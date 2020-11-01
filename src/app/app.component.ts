import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:Quote[] = [
    {id:1, name:'The work proves the crafts man'},
    {id:2, name:'Times moves slowly but passes quickly'},
    {id:3, name:'To be fond of learning is to be near to knowledge'},
 
    ];
  } 


