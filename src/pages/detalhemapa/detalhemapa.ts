import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-detalhemapa',
  templateUrl: 'detalhemapa.html',
})
export class DetalhemapaPage {

	public id;
  	blog: string[];

  	map: any;
    marker: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private blogProvider: BlogProvider) {
  		this.id = navParams.get("id");
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DetalhePage');
    	this.listaEncProfissionalId();
  	}

    listaEncProfissionalId() {
    	this.blogProvider.listaEncProfissionalId(this.id).subscribe(
			blog => {
				this.blog = blog.Data;

				this.blog.forEach(Data => {
			        this.initializeMap(Data["Latitude"], Data["Longitude"], this.blog);
			    });
			}
		);
    }


    initializeMap(latitude, longitude, data) {
 
        let locationOptions = {timeout: 20000, enableHighAccuracy: true};
 
        navigator.geolocation.getCurrentPosition(
 
            (position) => {
 
                let options = {
                  center: new google.maps.LatLng(latitude, longitude),
                  zoom: 14,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                }
 
                this.map = new google.maps.Map(document.getElementById("map_canvas"), options);

                // Add marker
                this.addMarker(latitude, longitude, data);
            },
 
            (error) => {
                console.log(error);
            }, locationOptions
        );
    }

    addMarker(latitude, longitude, data){
      	let marker = new google.maps.Marker({
        	map: this.map,
        	//animation: google.maps.Animation.DROP,
        	position: this.map.getCenter()
      	});

    		var id;
    		var Nome;
    		var Especialidade;
    		var Cidade;
    		var Estado;
    		var Latitude;
    		var Longitude;
    		var Email;
    		var Telefone;
    		var TelNumero;

      	data.forEach(Data => {
	        id            = Data["id"];
	        Nome          = Data["Nome"];
	        Especialidade = Data["Especialidade"];
	        Cidade        = Data["Cidade"];
	        Estado        = Data["Estado"];
	        Latitude      = Data["Latitude"];
	        Longitude     = Data["Longitude"];
	        Email         = Data["Email"];
	        Telefone      = Data["Telefone"];
	        TelNumero     = Data["TelNumero"];
	    });

      	let content = 
      		'<p><strong>Nome:</strong> ' + Nome + '</p>' +
        	'<p><strong>Telefone:</strong> <a href="tel:'+TelNumero+'">' + Telefone + '</a></p>' +
        	'<p><strong>E-mail:</strong> <a href="mailto:'+Email+'">' + Email + '</a></p>' +
        	'<p><strong>Especialidade:</strong> ' + Especialidade + '</p>'

      	this.addInfoWindow(marker, content);
    }

    addInfoWindow(marker, content){
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });

      infoWindow.open(this.map, marker);
    }

}