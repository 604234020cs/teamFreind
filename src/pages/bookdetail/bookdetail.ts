import { Book } from './../../models/book.model';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookdetail',
  templateUrl: 'bookdetail.html',
})
export class BookdetailPage {

  bookid:number;
  book:Book;

  constructor(public bookRest:BookRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.book=this.navParams.get("bookid");
    this.bookRest.getbookList().subscribe(data=>{
      this.book=data.filter(book => book.bookid === this.bookid)[0];
    });
  }
  ionViewDidLoad() {
    this.bookid=this.navParams.get("bookid");
    console.log(this.bookid);
  }
 
  goBack(){
    this.navCtrl.pop();
  }
}
