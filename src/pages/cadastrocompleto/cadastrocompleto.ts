import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastrocompleto',
  templateUrl: 'cadastrocompleto.html',
})
export class CadastrocompletoPage {

    public isDisabled1: any;
    public isDisabled2: any;

  	data: any = {};
    dataProfissao: any = [];
    dataEstado: any = [];
    dataCidade: any = [];

  	constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public blogProvider: BlogProvider,
  		public toastCtrl: ToastController,
  		public loadingCtrl: LoadingController)
  	{
      this.isDisabled1 = true;
      this.isDisabled2 = true;

      this.data.nome = navParams.get("nome");
      this.data.email = navParams.get("email");
      this.data.cpf = navParams.get("cpf");
      this.data.senha = navParams.get("senha");

      //this.data.nome = 'Bruno Teste';
      //this.data.email = 'brun24@teste.com';
      //this.data.cpf = '896.605.520-68';
      //this.data.senha = '111';
  	}

  	ionViewDidLoad() {
	    console.log('ionViewDidLoad CadastroPage');

      this.listaProfissao();
      this.listaEstado();
  	}

    listaProfissao()
    {
      this.blogProvider.listaProfissao().subscribe(res => {
        if(res.Registros){
          this.dataProfissao = res.Data
        }
      });
    }

    listaEstado()
    {
      this.blogProvider.listaEstado().subscribe(res => {
        if(res.Registros){
          this.dataEstado = res.Data
        }
      });
    }

    listaCidadesPorEstado()
    {
      this.blogProvider.listaCidadesPorEstado(this.data.estado).subscribe(res => {
        if(res.Registros){
          this.dataCidade = res.Data;
        }
      });
    }

    buscaCidade()
    {
      if(this.data.estado)
      {
        this.listaCidadesPorEstado();
        this.isDisabled2 = false;
      }
    }



    checked = [];

    // Adds the checkedbox to the array and check if you unchecked it
    atualizaProfissao(event, checkbox : String) {
      if ( event.checked ) {
        this.checked.push(checkbox);
      } else {
        let index = this.removeCheckedFromArray(checkbox);
        this.checked.splice(index,1);
      }
      
      this.data.profissao = this.checked.sort((a, b) => a > b ? 1 : -1).join(';');
    }

    // Removes checkbox from array when you uncheck it
    removeCheckedFromArray(checkbox : String) {
      return this.checked.findIndex((category)=>{
        return category === checkbox;
      })
    }

    //Empties array with checkedboxes
    /*
    emptyCheckedArray() {
      this.checked = [];
    }
    */



  	efetuaCadastro()
  	{
      if(!this.data.perfil || !this.data.profissao || !this.data.rg || !this.data.sexo || !this.data.nascimento || !this.data.celular || !this.data.telefone || !this.data.endereco || !this.data.numero || !this.data.bairro || !this.data.complemento || !this.data.cep || !this.data.estado || !this.data.cidade || !this.data.aceite)
      {
        this.toastCtrl.create({
            message: `Preencha todos os campos corretamente.`,
            duration: 5000,
            dismissOnPageChange: true,
        }).present();
      }
      else
      {
        this.finalizaCadastro();
      }


      //this.data.username = this.data.username.replace('.', '').replace('.', '').replace('-', '');


        /*
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
      	
        */
  	}

  	finalizaCadastro()
  	{
      	let loading = this.loadingCtrl.create({
        	content: 'Carregando...'
      	});

      	loading.present();

        // Formata os campos
        this.data.cpf = this.data.cpf.replace('.', '').replace('.', '').replace('-', '');
        this.data.celular = this.data.celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.data.telefone = this.data.telefone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');

        this.blogProvider.cadastroApp(this.data.nome, this.data.email, this.data.cpf, this.data.senha, this.data.perfil, this.data.profissao, this.data.rg, this.data.sexo, this.data.nascimento, this.data.celular, this.data.telefone, this.data.endereco, this.data.numero, this.data.bairro, this.data.complemento, this.data.cep, this.data.estado, this.data.cidade, this.data.aceite).subscribe(res => {
        	loading.dismiss();

          // Verifica se os campos já existem
          if(res.Usuario)
          {
            this.navCtrl.push(LoginPage, {
              cadastro: true,
            });
          }
          else
          {
            this.toastCtrl.create({
              //message: `Erro ao cadastrar. Verifique suas informações e tente novamente.`,
              message: res.CamposInvalidos.replace(';', ''),
              duration: 5000,
              dismissOnPageChange: true,
            }).present();
          }
      	});
  	}
}