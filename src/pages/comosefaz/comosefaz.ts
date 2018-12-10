import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { DetalhePage } from '../detalhe/detalhe';

@IonicPage()
@Component({
	selector: 'page-comosefaz',
	templateUrl: 'comosefaz.html',
})
export class ComosefazPage {

	blog: any = [];

    itensPorPagina = 10;
    paginaAtual = 1;

  	constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private blogProvider: BlogProvider,
      public loadingCtrl: LoadingController) {
  	}

  	ionViewDidLoad() {
    	this.listaBlogComoSeFaz();
  	}
 
  	listaBlogComoSeFaz() {
      let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });

      loading.present();

    	this.blogProvider.listaBlogComoSeFaz(this.itensPorPagina, this.paginaAtual).subscribe(blog => {
        loading.dismiss();

        if(blog.Registro){
          this.blog = blog.Data;
        }
      });
  	}

    detalhePost(id:number){
      this.navCtrl.push(DetalhePage, {
        id: id
      });
    }

    doInfinite(infiniteScroll) {
      this.paginaAtual++;

      setTimeout(() => {
        this.blogProvider.listaBlogComoSeFaz(this.itensPorPagina, this.paginaAtual).subscribe(blog => {
          infiniteScroll.complete();
          if(blog.Registro){
            this.blog = this.blog.concat(blog.Data);
          }
        });
      }, 1000);
    }

}