import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

import { CadastrocompletoPage } from '../cadastrocompleto/cadastrocompleto';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

	data: any = {};

  	constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public blogProvider: BlogProvider,
  		public toastCtrl: ToastController,
  		public loadingCtrl: LoadingController) {
  	}

  	ionViewDidLoad() {
	    console.log('ionViewDidLoad CadastroPage');
  	}

  	efetuaCadastro()
  	{
  		var nome  = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/;
  		var email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
      	var cpf   = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

      	if(!this.data.nome || !this.data.email || !this.data.cpf || !this.data.senha)
      	{
        	this.toastCtrl.create({
          		message: `Preencha todos os campos corretamente.`,
          		duration: 5000,
          		dismissOnPageChange: true,
        	}).present();
      	}
      	else if(!nome.test(this.data.nome))
      	{
        	this.toastCtrl.create({
          		message: `Informe seu nome corretamente.`,
          		duration: 5000,
          		dismissOnPageChange: true,
        	}).present();
      	}
      	else if(!cpf.test(this.data.cpf))
      	{
        	this.toastCtrl.create({
          		message: `Informe um número de cpf válido.`,
          		duration: 5000,
          		dismissOnPageChange: true,
        	}).present();
      	}
      	else if(!email.test(this.data.email))
      	{
        	this.toastCtrl.create({
          		message: `Informe um email válido.`,
          		duration: 5000,
          		dismissOnPageChange: true,
        	}).present();
      	}
      	else
      	{
      		this.validaPreCadastro();
        }
  	}

  	efetuaCadastroFb()
  	{
  		this.toastCtrl.create({
      		message: `Em desenvolvimento...`,
      		duration: 5000,
      		dismissOnPageChange: true,
    	}).present();
  	}

  	validaPreCadastro()
  	{
      	let loading = this.loadingCtrl.create({
        	content: 'Carregando...'
      	});

      	loading.present();

    	this.blogProvider.validaPreCadastro(this.data.email, this.data.cpf).subscribe(res => {
        	loading.dismiss();        

        	// Verifica se os campos já existem
        	if(res.Existencia)
        	{
          		this.toastCtrl.create({
		      		message: `Email e/ou cpf já cadastrados. Verifique suas informações e tente novamente.`,
		      		duration: 5000,
		      		dismissOnPageChange: true,
		    	}).present();
        	}
        	else
        	{
        		this.navCtrl.push(CadastrocompletoPage, {
			        nome: this.data.nome,
			        email: this.data.email,
			        cpf: this.data.cpf,
			        senha: this.data.senha,
			    });
        	}
      	});
  	}
}
