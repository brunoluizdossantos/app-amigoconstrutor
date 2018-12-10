import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { DetalhePage } from '../detalhe/detalhe';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  blog: any = [];

    itensPorPagina = 10;
    paginaAtual = 1;

    lat: any;
    lng: any;

  	constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private blogProvider: BlogProvider,
      private geo: Geolocation,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public toastCtrl: ToastController,
      public network: Network,
      public http: Http) {

  	}

  	ionViewDidLoad() {
    	this.listaBlog();

      this.geo.getCurrentPosition().then( pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      }).catch( err => console.log(err));

  	}
 
  	listaBlog() {
      let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });

      loading.present();

    	this.blogProvider.listaBlog(this.itensPorPagina, this.paginaAtual).subscribe(blog => {
        loading.dismiss();        

        if(blog.Registro){
          this.blog = blog.Data
        }

        /*this.toastCtrl.create({
          //message: `Você está conectado com a internet.You are now ${this.connectionState} via ${networkType}`,
          message: `Você está conectado com a internet.`,
          duration: 5000,
          dismissOnPageChange: true,
        }).present();*/
      });
  	}

    detalhePost(id:number){
      console.log(id);
      this.navCtrl.push(DetalhePage, {
        id: id
      });
    }

    doInfinite(infiniteScroll) {
      this.paginaAtual++;

      setTimeout(() => {
        this.blogProvider.listaBlog(this.itensPorPagina, this.paginaAtual).subscribe(blog => {
          infiniteScroll.complete();

          if(blog.Registro){
            this.blog = this.blog.concat(blog.Data);
          }
          
        });
      }, 1000);
    }

}