import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { AmigoconstrutorensinaPage } from '../pages/amigoconstrutorensina/amigoconstrutorensina';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastrocompletoPage } from '../pages/cadastrocompleto/cadastrocompleto';
import { ComosefazPage } from '../pages/comosefaz/comosefaz';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { DetalhemapaPage } from '../pages/detalhemapa/detalhemapa';
import { HomePage } from '../pages/home/home';
import { HomelogadoPage } from '../pages/homelogado/homelogado';
import { InstitucionalPage } from '../pages/institucional/institucional';
import { ListPage } from '../pages/list/list';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { LocalizacaobuscaPage } from '../pages/localizacaobusca/localizacaobusca';
import { LoginPage } from '../pages/login/login';
import { MercadoPage } from '../pages/mercado/mercado';
import { ProfissionalPage } from '../pages/profissional/profissional';
import { ProfissionalbuscaPage } from '../pages/profissionalbusca/profissionalbusca';
import { RecuperasenhaPage } from '../pages/recuperasenha/recuperasenha';
import { RededoamigoPage } from '../pages/rededoamigo/rededoamigo';
import { VideosPage } from '../pages/videos/videos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any;

  pages: Array<{class: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { class: 'restrita',     title: 'Área Restrita', component: HomelogadoPage },
      { class: 'home',         title: 'Home', component: HomePage },
      { class: 'ensina',       title: '• Amigo Construtor Ensina', component: AmigoconstrutorensinaPage },
      { class: 'como-faz',     title: '• Como se faz', component: ComosefazPage },
      { class: 'mercado',      title: '• Mercado', component: MercadoPage },
      { class: 'rede-amigo',   title: '• Rede do Amigo', component: RededoamigoPage },
      { class: 'video',        title: '• Vídeos', component: VideosPage },
      { class: 'quem-somos',   title: 'Institucional', component: InstitucionalPage },
      { class: 'produto',      title: 'Produtos', component: InstitucionalPage },
      { class: 'encontre',     title: 'Encontre um Profissional', component: ProfissionalPage },
      { class: 'localizacao',  title: 'Localização das Lojas', component: LocalizacaoPage },
      { class: 'fale-conosco', title: 'Fale Conosco', component: InstitucionalPage },
      { class: 'cadastro',     title: 'Cadastre-se', component: CadastroPage },
      { class: 'login',        title: 'Faça seu Login', component: LoginPage },
    ];

    // Recupera a sessão local
    storage.get('usuario').then((name) =>
    {
      // Verifica se o usuário está logado
      if(name) {

        // Ajusta o menu
        document.getElementById("restrita").style.display = "block";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("login").style.display = "none";

        // Direciona para a página restrita
        this.rootPage = HomelogadoPage;

      } else {

        // Ajusta o menu
        document.getElementById("restrita").style.display = "none";
        document.getElementById("cadastro").style.display = "block";
        document.getElementById("login").style.display = "block";

        // Direciona para a página inicial
        this.rootPage = HomePage;
        
      }
    });

    //this.rootPage = LoginPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.title == 'Produtos')
    {
      window.open('http://brasil.intercement.com/ProdutosServicos/produtos_servicos', '_system');
    }
    else if(page.title == 'Fale Conosco')
    {
      window.open('http://brasil.intercement.com/atendimento', '_system'); 
    }
    else
    {
      this.nav.setRoot(page.component);
    }
  }
}
