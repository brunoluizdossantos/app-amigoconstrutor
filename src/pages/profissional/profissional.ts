import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { DetalhemapaPage } from '../detalhemapa/detalhemapa';
import { ProfissionalbuscaPage } from '../profissionalbusca/profissionalbusca';

@IonicPage()
@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html',
})
export class ProfissionalPage {

	  blog: any = [];

    itensPorPagina = 20;
    paginaAtual = 1;

    public idEstado;
    public idCidade;
    public idEspecialidade;

  	constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private blogProvider: BlogProvider,
      public loadingCtrl: LoadingController) {

      this.idEstado = navParams.get("idEstado");
      this.idCidade = navParams.get("idCidade");
      this.idEspecialidade = navParams.get("idEspecialidade");
  	}

  	ionViewDidLoad() {
    	this.listaEncProfissional();
  	}

  	listaEncProfissional() {
      let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });

      loading.present();

      this.blogProvider.listaEncProfissional(this.idEstado, this.idCidade, this.idEspecialidade, this.itensPorPagina, this.paginaAtual).subscribe(blog => {
        loading.dismiss();

        if(blog.Registros){
          this.blog = blog.Data;
        }
      });
  	}

    detalhePost(id:number){
      this.navCtrl.push(DetalhemapaPage, {
        id: id
      });
    }

    doInfinite(infiniteScroll) {
      this.paginaAtual++;

      setTimeout(() => {
        this.blogProvider.listaEncProfissional(this.idEstado, this.idCidade, this.idEspecialidade, this.itensPorPagina, this.paginaAtual).subscribe(blog => {
          infiniteScroll.complete();

          if(blog.Registros){
            this.blog = this.blog.concat(blog.Data);
          }
        });
      }, 1000);
    }

    pesquisaProfissional(){
      this.navCtrl.push(ProfissionalbuscaPage, {
        idEstado: this.idEstado,
        idCidade: this.idCidade,
        idEspecialidade: this.idEspecialidade,
      });
    }

}