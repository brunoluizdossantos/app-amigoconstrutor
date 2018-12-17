import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BlogProvider } from '../../providers/blog/blog';

import { HomePage } from '../home/home';
import { DetalhePage } from '../detalhe/detalhe';
import { ProfissionalPage } from '../profissional/profissional';

@IonicPage()
@Component({
  selector: 'page-homelogado',
  templateUrl: 'homelogado.html',
})
export class HomelogadoPage {
	sessao: any = {};

  	constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private blogProvider: BlogProvider,
      public storage: Storage) {

      this.storage.get('usuario').then((name) => {
        if(name){
          this.sessao.nomeUsuario = name;
        }
      });
  	}

  	ionViewDidLoad() {
	    console.log('ionViewDidLoad HomelogadoPage');
  	}

    efetuarLogout(){
      // Limpa a sessão
      this.storage.clear().then(() => {
        console.log('all keys cleared');

        // Ajusta o menu
        document.getElementById("restrita").style.display = "none";
        document.getElementById("meus-dados").style.display = "none";
        document.getElementById("cad-profi").style.display = "none";
        document.getElementById("cadastro").style.display = "block";
        document.getElementById("login").style.display = "block";
      });

      this.navCtrl.push(HomePage);
    }

    detalhePost(id:number){
      this.navCtrl.push(DetalhePage, {
        id: id
      });
    }

    encontreProfissional(){
      this.navCtrl.push(ProfissionalPage);
    }

}
