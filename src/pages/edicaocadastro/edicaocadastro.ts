import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-edicaocadastro',
  templateUrl: 'edicaocadastro.html',
})
export class EdicaocadastroPage {

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



  	efetuaEdicao()
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
        this.finalizaEdicao();
      }
  	}

  	finalizaEdicao()
  	{
      	let loading = this.loadingCtrl.create({
        	content: 'Carregando...'
      	});

      	loading.present();

        // Formata os campos
        this.data.cpf = this.data.cpf.replace('.', '').replace('.', '').replace('-', '');
        this.data.celular = this.data.celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.data.telefone = this.data.telefone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');

        this.blogProvider.edicaoApp(this.data.nome, this.data.email, this.data.cpf, this.data.senha, this.data.perfil, this.data.profissao, this.data.rg, this.data.sexo, this.data.nascimento, this.data.celular, this.data.telefone, this.data.endereco, this.data.numero, this.data.bairro, this.data.complemento, this.data.cep, this.data.estado, this.data.cidade, this.data.aceite).subscribe(res => {
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