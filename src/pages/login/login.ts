import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

import { BlogProvider } from '../../providers/blog/blog';
import { RecuperasenhaPage } from '../recuperasenha/recuperasenha';
import { HomelogadoPage } from '../homelogado/homelogado';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

  data: any = {};
  blog: any = [];

  public inputCpf;
  public inputSenha;

  	constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private blogProvider: BlogProvider,
      public toastCtrl: ToastController,
      public http: Http,
      public storage: Storage) {
      this.data.username = '';
      this.data.password = '';
      this.data.response = '';
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LoginPage');
  	}

  	efetuaLogin() {

      var cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

      if(!this.data.username || !this.data.password)
      {
        this.toastCtrl.create({
          message: `Preencha todos os campos corretamente.`,
          duration: 5000,
          dismissOnPageChange: true,
        }).present();
      }
      else if(!cpf.test(this.data.username))
      {
        this.toastCtrl.create({
          message: `Informe um número de cpf válido.`,
          duration: 5000,
          dismissOnPageChange: true,
        }).present();
      }
      else
      {

        this.data.username = this.data.username.replace('.', '').replace('.', '').replace('-', '');

        this.blogProvider.login(this.data.username, this.data.password).subscribe(blog => {

          if(blog.Registros){

            // Define o valor da sessão
            this.storage.set('usuario', blog.Data[0].Nome);

            // Ajusta o menu
            document.getElementById("restrita").style.display = "block";
            document.getElementById("login").style.display = "none";

            this.navCtrl.push(HomelogadoPage);
          }
          else
          {
            this.toastCtrl.create({
              message: `Cpf e/ou senha não encontrados. Tente novamente.`,
              duration: 5000,
              dismissOnPageChange: true,
            }).present();
          }
          
        });
      }
  	}

  	recuperaSenha() {
  		this.navCtrl.push(RecuperasenhaPage);
  	}

    // Método post de exemplo
    /*
    // http://www.nikola-breznjak.com/blog/javascript/ionic3/posting-data-ionic-3-app-php-server/
    var link = 'http://amigoconstrutor.clientesdream.com.br/wp-content/themes/amigo-construtor/mobile/api-post-teste.php';
    var link = 'http://amigoconstrutor.clientesdream.com.br/portal/servicos/ValidarLogin2';
    
    
    var myData = JSON.stringify({CPF: this.data.username, Senha: this.data.password});

    this.http.post(link, myData)
    .subscribe(data => {
      this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    }, error => {
      console.log("Oooops!");
    });
    */
}
