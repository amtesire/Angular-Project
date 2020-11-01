import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The work proves the crafts man','Will Smith', new Date(2017,3,14)),
    new Quote(2,'Times moves slowly but passes quickly','Maite Perroni', new Date(2019,6,9)),
    new Quote(3,'To be fond of learning is to be near to knowledge','Luther King', new Date(2018,1,12)),
 
    ];

    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }
    

    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      this.quotes.push(quote)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
