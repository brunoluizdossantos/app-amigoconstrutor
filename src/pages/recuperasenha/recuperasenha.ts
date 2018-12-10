import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-recuperasenha',
  templateUrl: 'recuperasenha.html',
})
export class RecuperasenhaPage {

    data: any = {};
	  public inputEmail;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
      private blogProvider: BlogProvider,
  		public toastCtrl: ToastController) {

      this.data.email = '';
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad RecuperasenhaPage');
  	}

  	recuperaSenha()
  	{
  		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
  		if(!re.test(this.data.email))
  		{
  			this.toastCtrl.create({
  	          message: `Informe um e-mail válido.`,
  	          duration: 5000,
              dismissOnPageChange: true,
  	        }).present();
  		}
  		else
  		{
        this.blogProvider.recuperaSenha(this.data.email).subscribe(blog => {

          if(blog.Registros){
            //this.navCtrl.push(LoginPage);

            // Reseta o campo email
            this.data.email = null;
          }
          
          this.toastCtrl.create({
            message: blog.Feedback,
            duration: 5000
          }).present();
          
        });
  		}
  	}

}
