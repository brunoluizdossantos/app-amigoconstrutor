import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//import { LocationAccuracy } from '@ionic-native/location-accuracy';

import { BlogProvider } from '../../providers/blog/blog';
import { LocalizacaobuscaPage } from '../localizacaobusca/localizacaobusca';

declare var google;

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
  providers:[[Geolocation]]
})
export class LocalizacaoPage {

    map: any;
    marker: any;

    blog: any;
    coords: any = {};
    teste: any = {};

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public blogProvider: BlogProvider,
      public toastCtrl: ToastController,
      public loadingCtrl: LoadingController) {

      if(navParams.get("raio"))
      {
        this.coords.cep  = navParams.get("cep");
        this.coords.raio = navParams.get("raio");

        this.procuraEndereco(this.coords.cep, this.coords.raio);
      }
      else
      {
        this.coords.raio = 2;

        this.initializeMap();
      }
    }

    ionViewDidLoad(){
    }

    initializeMap() {

        let loading = this.loadingCtrl.create({
          content: 'Carregando...'
        });

        loading.present();
        
        let locationOptions = {timeout: 2000, enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition(
 
            (position) => {

                this.coords.latitude = position.coords.latitude;
                this.coords.longitude = position.coords.longitude;

                this.criaMapa(this.coords.latitude, this.coords.longitude, this.coords.raio, '', '');

                // Esconde o carregamento
                loading.dismiss();
            },
 
            (error) => {

                loading.dismiss();

                this.toastCtrl.create({
                  //message: 'Erro: ' + error,
                  message: 'Não foi possível exibir o mapa, ative sua localização e tente novamente.',
                  //duration: 5000,
                  dismissOnPageChange: true,
                }).present();

            }, locationOptions
        );
    }

    procuraEndereco(cep, raio)
    {
      let loading = this.loadingCtrl.create({
        content: 'Carregando...'
      });

      loading.present();


      var latitude;
      var longitude;
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({
        'address': cep
        }, 
        function(results, status)
        {
          if(status == google.maps.GeocoderStatus.OK)
          {
            var geocod    = results[0].geometry.location + '';
            var location  = geocod.split(", ");
            latitude  = location[0].replace('(', '');
            longitude = location[1].replace(')', '');
          }
        }
      );

      
      // Aguarda 1 segundo para os valores serem contabilizados pela função Geocoder
      let hideFooterTimeout = setTimeout( () => {

        // Verifica se os dados foram encontrados
        if(latitude)
        {
          this.criaMapa(latitude, longitude, this.coords.raio, '', '');

          // Esconde o carregamento
          loading.dismiss();
        }
        else
        {
          // Esconde o carregamento
          loading.dismiss();

          // Exibe a mensagem
          this.toastCtrl.create({
            message: 'O cep informado não foi encontrado, tente novamente.',
            duration: 5000,
            dismissOnPageChange: true,
          }).present();
        }
      }, 1000);
    }

    // Adiciona os pontos no mapa junto da API das lojas
    criaMapa(latitude, longitude, raio, zoom, mensagem)
    {
      mensagem = 'Não foi encontrado nenhuma loja. Ajuste sua pesquisa e tente novamente.';

      if(raio == 1) { zoom = 15; }
      else if(raio == 2) { zoom = 13; }
      else if(raio == 3) { zoom = 13; }
      else if(raio == 4) { zoom = 12; }
      else if(raio == 5) { zoom = 12; }
      else if(raio == 6) { zoom = 12; }
      else if(raio == 7) { zoom = 11; }
      else if(raio == 8) { zoom = 11; }
      else if(raio == 9) { zoom = 11; }
      else if(raio == 10){ zoom = 11; }

      // esta variável vai definir a área de mapa a abranger e o nível do zoom
      // de acordo com as posições dos marcadores
      //var bounds = new google.maps.LatLngBounds();

      let options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(document.getElementById("map_canvas"), options);

      var infowindow = new google.maps.InfoWindow();
      var marker;
      var i = 0;

      // Adiciona a localização atual do dispositivo
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: this.map,
        icon: 'assets/imgs/marcador3.png',
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<div id="iw_container"><div class="iw_title">Sua localização</div></div>');
          infowindow.open(this.map, marker);
        }
      })(marker, i));

      
      let hideFooterTimeout = setTimeout( () => {

        //this.map.setVisible(true);

        // Os valores de latitude e longitude do marcador são adicionados à variável bounds
        //bounds.extend(this.coords.latitude, this.coords.longitude);

        // Retorna os estabelecimentos
        this.blogProvider.listaEstabLocalizacao(latitude, longitude, raio).subscribe(blog => {
          if(blog.Registros){
            if(blog.Registros == 1){
              mensagem = 'Foi encontrada '+blog.Registros+' loja Intercement.';
            } else {
              mensagem = 'Foram encontradas '+blog.Registros+' lojas Intercement.';
            }

            this.blog = blog.Data;

            Object.keys(this.blog).forEach(key=> {
                if(this.blog[key].Latitude != '' && this.blog[key].Longitude != '')
                {
                  i++;

                  var iwContent = '' + 
                    '<div id="iw_container">' +
                       '<div class="iw_title"><strong>' + this.blog[key].RazaoSocial + '</strong></div>' +
                       '<div class="iw_content">' + 
                          this.blog[key].EnderecoDoBanco + '<br />' + 
                          '<a href="tel:'+this.blog[key].Telefone1+'" target="_blank" class="telefone">' + this.blog[key].Telefone1 + '</span><br />' + 
                          '<a href="mailto:'+this.blog[key].Email+'" target="_blank" class="site">' + this.blog[key].Email + '</a>' + 
                       '</div>' + 
                    '</div>';

                  marker = new google.maps.Marker({
                    position: new google.maps.LatLng(this.blog[key].Latitude, this.blog[key].Longitude),
                    map: this.map,
                    icon: 'assets/imgs/marcador2.png',
                  });

                  google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                      infowindow.setContent(iwContent);
                      infowindow.open(this.map, marker);
                    }
                  })(marker, i));

                  // Os valores de latitude e longitude do marcador são adicionados à variável bounds
                  //bounds.extend(this.blog[key].Latitude, this.blog[key].Longitude);

                }
            });

            // Depois de criados todos os marcadores
            // a API através da sua função fitBounds vai redefinir o nível do zoom
            // e consequentemente a área do mapa abrangida.
            //this.map.fitBounds(bounds);

          }


          // Exibe a mensagem
          this.toastCtrl.create({
            message: mensagem,
            duration: 5000,
            dismissOnPageChange: true,
          }).present();

        });

      }, 500);
    }

    pesquisaLoja()
    {
      this.navCtrl.push(LocalizacaobuscaPage, {
        latitude: this.coords.latitude,
        longitude: this.coords.longitude,
        cep: this.coords.cep,
        raio: this.coords.raio,
      });
    }

    testeModal() {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
          <div class="custom-spinner-container">
            <br>
            <p>parágrafo de teste um.... <a href="#">Link de teste</a></p>
            <p>O Amigo Construtor é um projeto de comunicação e de relacionamento da InterCement, fabricante dos cimentos Cauê, Cimpor, Zebu e Goiás, para se aproximar cada vez mais dos profissionais que trabalham na Construção Civil.</p>
            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da construção, além de dicas, conversas com especialistas, vídeos, teste de conhecimentos e muito mais.</p>
            <p>Então, fique à vontade para participar e compartilhar suas experiências com a gente.</p>
            <p>Será um prazer ter você por aqui acompanhando nossas novidades!</p>

            <p>O Amigo Construtor é um projeto de comunicação e de relacionamento da InterCement, fabricante dos cimentos Cauê, Cimpor, Zebu e Goiás, para se aproximar cada vez mais dos profissionais que trabalham na Construção Civil.</p>
            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da construção, além de dicas, conversas com especialistas, vídeos, teste de conhecimentos e muito mais.</p>
            <p>Então, fique à vontade para participar e compartilhar suas experiências com a gente.</p>
            <p>Será um prazer ter você por aqui acompanhando nossas novidades!</p>

            <p>O Amigo Construtor é um projeto de comunicação e de relacionamento da InterCement, fabricante dos cimentos Cauê, Cimpor, Zebu e Goiás, para se aproximar cada vez mais dos profissionais que trabalham na Construção Civil.</p>
            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da construção, além de dicas, conversas com especialistas, vídeos, teste de conhecimentos e muito mais.</p>
            <p>Então, fique à vontade para participar e compartilhar suas experiências com a gente.</p>
            <p>Será um prazer ter você por aqui acompanhando nossas novidades!</p>
            <div class="space"></div>
          </div>`,
        duration: 10000
      });

      loading.onDidDismiss(() => {
        console.log('Dismissed loading');
      });

      loading.present();
    }
}