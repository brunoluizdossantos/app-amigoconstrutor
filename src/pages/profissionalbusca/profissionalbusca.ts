import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { ProfissionalPage } from '../profissional/profissional';

import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profissionalbusca',
  templateUrl: 'profissionalbusca.html',
})
export class ProfissionalbuscaPage {

    public isDisabled1: any;
    public isDisabled2: any;

  	estado: any = [];
  	cidade: any = [];
  	especialidade: any = [];

  	public inputEstado;
	  public inputCidade;
	  public inputEspecialidade;


    itensPorPagina = 20;
    paginaAtual = 1;

  	constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private blogProvider: BlogProvider,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,) {

      this.isDisabled1 = true;
      this.isDisabled2 = true;

      this.inputEstado = navParams.get("idEstado");
      this.inputCidade = navParams.get("idCidade");
      this.inputEspecialidade = navParams.get("idEspecialidade");

      if(this.inputEstado){ this.isDisabled1 = false; this.listaCidadesPorEstadoFiltroEncontreProfissional(); }
      if(this.inputCidade){ this.isDisabled2 = false; this.listaEspecialidadesPorCidadeFiltroEncontreProfissional(); }
  	}

  	ionViewDidLoad() {
    	this.listaEstadosFiltroEncontreProfissional();
  	}

  	listaEstadosFiltroEncontreProfissional() {
      /*let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });*/

      //loading.present();

      this.blogProvider.listaEstadosFiltroEncontreProfissional().subscribe(estado => {
        //loading.dismiss();

        if(estado.Registros){
          this.estado = estado.Data;
        }
      });
  	}

  	listaCidadesPorEstadoFiltroEncontreProfissional() {
      /*let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });*/

      //loading.present();

      this.blogProvider.listaCidadesPorEstadoFiltroEncontreProfissional(this.inputEstado).subscribe(cidade => {
        //loading.dismiss();

        if(cidade.Registros){
          this.cidade = cidade.Data;
        }
      });
  	}

  	listaEspecialidadesPorCidadeFiltroEncontreProfissional() {
      /*let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });*/

      //loading.present();

      this.blogProvider.listaEspecialidadesPorCidadeFiltroEncontreProfissional(this.inputEstado, this.inputCidade).subscribe(especialidade => {
        //loading.dismiss();

        if(especialidade.Registros){
          this.especialidade = especialidade.Data;
        }
      });
  	}

  	buscaCidade()
  	{
  		this.cidade = null;
  		this.especialidade = null;

      this.inputCidade = 0;
      this.inputEspecialidade = 0;

    	if(this.inputEstado)
    	{
      	this.listaCidadesPorEstadoFiltroEncontreProfissional();
        this.isDisabled1 = false;
  	  }
  	}

  	buscaEspecialidade()
  	{
  		this.especialidade = null;

      this.inputEspecialidade = 0;

    	if(this.inputCidade)
    	{
      	this.listaEspecialidadesPorCidadeFiltroEncontreProfissional();
        this.isDisabled2 = false;
    	}
  	}

  	pesquisaProfissional()
  	{
  		if(!this.inputEstado)
  		{
  			this.toastCtrl.create({
	          message: `Para continuar, selecione o estado.`,
	          duration: 5000,
            dismissOnPageChange: true,
	        }).present();
        }
        else
        {
        	this.navCtrl.push(ProfissionalPage, {
		        idEstado: this.inputEstado,
		        idCidade: this.inputCidade,
		        idEspecialidade: this.inputEspecialidade,
		    });
        }
  	}

    limpaCampo()
    {
      this.inputEstado = null;
      this.inputCidade = null;
      this.inputEspecialidade = null;

      this.isDisabled1 = true;
      this.isDisabled2 = true;
    }

}