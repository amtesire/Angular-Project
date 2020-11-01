import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'The work proves the crafts man', author:'Will Smith'},
    {id:2, name:'Times moves slowly but passes quickly', author:'Maite Perroni'},
    {id:3, name:'To be fond of learning is to be near to knowledge', author:'Luther King'},
 
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
