import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlogProvider } from '../providers/blog/blog';

import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AmigoconstrutorensinaPage,
    CadastroPage,
    CadastrocompletoPage,
    ComosefazPage,
    DetalhePage,
    DetalhemapaPage,
    HomePage,
    HomelogadoPage,
    InstitucionalPage,
    ListPage,
    LocalizacaoPage,
    LocalizacaobuscaPage,
    LoginPage,
    MercadoPage,
    ProfissionalPage,
    ProfissionalbuscaPage,
    RecuperasenhaPage,
    RededoamigoPage,
    VideosPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AmigoconstrutorensinaPage,
    CadastroPage,
    CadastrocompletoPage,
    ComosefazPage,
    DetalhePage,
    DetalhemapaPage,
    HomePage,
    HomelogadoPage,
    InstitucionalPage,
    ListPage,
    LocalizacaoPage,
    LocalizacaobuscaPage,
    LoginPage,
    MercadoPage,
    ProfissionalPage,
    ProfissionalbuscaPage,
    RecuperasenhaPage,
    RededoamigoPage,
    VideosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BlogProvider,
    Geolocation,
    Network,
    IonicStorageModule,
  ]
})
export class AppModule {}
