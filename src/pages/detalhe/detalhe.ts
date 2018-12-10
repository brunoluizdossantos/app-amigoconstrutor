import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

	public id;
  blog: string[];

  	constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
  		this.id = navParams.get("id");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetalhePage');
    	this.listaBlog();
  	}

    listaBlog() {
      this.blogProvider.listaBlogPost(this.id)
           .subscribe(
            blog => this.blog = blog.Data);
    }

}