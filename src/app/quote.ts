export class Quote {
public showAuthor: boolean;
constructor(public id: number,public name: string,public author: string,public upvote:number,
    public downvote:number, public completeDate: Date){
this.showAuthor=false;
  }
}
