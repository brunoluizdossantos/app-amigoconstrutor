import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocalizacaoPage } from '../localizacao/localizacao';

@IonicPage()
@Component({
  selector: 'page-localizacaobusca',
  templateUrl: 'localizacaobusca.html',
})
export class LocalizacaobuscaPage {

	public inputCep;
  public inputRaio;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.inputCep  = navParams.get("cep");
    this.inputRaio = navParams.get("raio");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaobuscaPage');
  }

  	pesquisaProfissional()
  	{
  		if(!this.inputRaio || !this.inputCep)
  		{
  			this.toastCtrl.create({
	          message: `Para continuar, informe o cep e o raio.`,
	          duration: 5000,
	          dismissOnPageChange: true,
	        }).present();
        }
        else
        {
        	/*this.navCtrl.push(LocalizacaoPage, {
		        cep: this.inputCep,
		        raio: this.inputRaio,
		      });*/

          this.navCtrl.setRoot(LocalizacaoPage, {
            cep: this.inputCep,
            raio: this.inputRaio,
          });
        }
  	}

    limpaCampo()
    {
      this.inputCep = null;
      this.inputRaio = null;
    }

}
