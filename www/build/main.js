webpackJsonp([18],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



var BlogProvider = /** @class */ (function () {
    function BlogProvider(http) {
        this.http = http;
        this.dominio = 'http://amigoconstrutor.clientesdream.com.br';
        this.apiBlog = this.dominio + "/wp-content/themes/amigo-construtor/mobile/api-posts-home.php";
        this.apiPortal = this.dominio + "/portal/servicos/";
    }
    BlogProvider.prototype.listaBlog = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogAmigoEnsina = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual + "&cat=5")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogComoSeFaz = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual + "&cat=7")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogMercado = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual + "&cat=8")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogRedeAmigo = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual + "&cat=6")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogVideo = function (itensPorPagina, paginaAtual) {
        return this.http.get(this.apiBlog + "?itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual + "&cat=39")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaBlogPost = function (id) {
        return this.http.get(this.apiBlog + "?id=" + id)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEncProfissional = function (idEstado, idCidade, idEspecialidade, itensPorPagina, paginaAtual) {
        if (idEstado === void 0) { idEstado = 0; }
        if (idCidade === void 0) { idCidade = 0; }
        if (idEspecialidade === void 0) { idEspecialidade = 0; }
        if (itensPorPagina === void 0) { itensPorPagina = 10; }
        if (paginaAtual === void 0) { paginaAtual = 1; }
        return this.http.get(this.apiPortal + "ObterUsuariosFiltroEncontreProfissionalPaginada?CodigoEstado=" + idEstado + "&CodigoCidade=" + idCidade + "&CodigoEspecialidade=" + idEspecialidade + "&itensPorPagina=" + itensPorPagina + "&paginaAtual=" + paginaAtual)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEncProfissionalId = function (id) {
        return this.http.get(this.apiPortal + "ObterUsuarioPorId?id=" + id)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEstadosFiltroEncontreProfissional = function () {
        return this.http.get(this.apiPortal + "ObterEstadosFiltroEncontreProfissional?CodigoEstado=0&CodigoCidade=0&CodigoEspecialidade=0")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaCidadesPorEstadoFiltroEncontreProfissional = function (idEstado) {
        return this.http.get(this.apiPortal + "ObterCidadesPorEstadoFiltroEncontreProfissional?CodigoEstado=" + idEstado + "&CodigoCidade=0&CodigoEspecialidade=0")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEspecialidadesPorCidadeFiltroEncontreProfissional = function (idEstado, idCidade) {
        return this.http.get(this.apiPortal + "ObterEspecialidadesPorCidadeFiltroEncontreProfissional?CodigoEstado=" + idEstado + "&CodigoCidade=" + idCidade + "&CodigoEspecialidade=0")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.login = function (username, password) {
        return this.http.get(this.apiPortal + "ValidarLogin2?cpf=" + username + "&senha=" + password)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.recuperaSenha = function (email) {
        return this.http.get(this.apiPortal + "RecuperarSenha?email=" + email)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEstabLocalizacao = function (latitude, longitude, raio) {
        return this.http.get(this.apiPortal + "ObterTodasRevendas2?latitude=" + latitude + "&longitude=" + longitude + "&raio=" + raio)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.validaPreCadastro = function (email, cpf) {
        return this.http.get(this.apiPortal + "VerificarExistenciaCPFEmail?email=" + email + "&cpf=" + cpf)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaProfissao = function () {
        return this.http.get(this.apiPortal + "ObterProfissoes2")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaEstado = function () {
        return this.http.get(this.apiPortal + "ObterEstados2")
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.listaCidadesPorEstado = function (idEstado) {
        return this.http.get(this.apiPortal + "ObterCidadesPorEstado2?codigoEstado=" + idEstado)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.cadastroApp = function (nome, email, cpf, senha, perfil, profissao, rg, sexo, nascimento, celular, telefone, endereco, numero, bairro, complemento, cep, estado, cidade, aceite) {
        return this.http.get(this.apiPortal + "CadastrarUsuario2?Nome=" + nome + "&Email=" + email + "&CPF=" + cpf + "&Senha=" + senha + "&CodigoPerfil=" + perfil + "&CodigosProfissao=" + profissao + "&RG=" + rg + "&CodigoSexo=" + sexo + "&DataNascimento=" + nascimento + "&CelularFormatado=" + celular + "&TelefoneComercialFormatado=" + telefone + "&Endereco=" + endereco + "&Numero=" + numero + "&Bairro=" + bairro + "&Complemento=" + complemento + "&CEP=" + cep + "&CodigoEstado=" + estado + "&CodigoCidade=" + cidade + "&ParticipaEncontreProfissional=" + aceite)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider.prototype.cadastroFacebook = function (latitude, longitude, raio) {
        return this.http.get(this.apiPortal + "ObterTodasRevendas2?latitude=" + latitude + "&longitude=" + longitude + "&raio=" + raio)
            .map(function (data) {
            return data.json();
        });
    };
    BlogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], BlogProvider);
    return BlogProvider;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmigoconstrutorensinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmigoconstrutorensinaPage = /** @class */ (function () {
    function AmigoconstrutorensinaPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    AmigoconstrutorensinaPage.prototype.ionViewDidLoad = function () {
        this.listaBlogAmigoEnsina();
    };
    AmigoconstrutorensinaPage.prototype.listaBlogAmigoEnsina = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlogAmigoEnsina(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
        });
    };
    AmigoconstrutorensinaPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    AmigoconstrutorensinaPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlogAmigoEnsina(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    AmigoconstrutorensinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amigoconstrutorensina',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\amigoconstrutorensina\amigoconstrutorensina.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Amigo Construtor Ensina</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n\n      	<img src="{{b.image}}"/>\n\n  \n\n      	<ion-card-content>\n\n      		<p class="fData">{{b.date}}</p>\n\n        	<ion-card-title>{{b.title}}</ion-card-title>\n\n        	<!--<p *ngIf="b.id_cat == 5" class="fCat">{{b.category}}</p>-->\n\n        	<p class="fCat">{{b.category}}</p>\n\n        	<p>{{b.excerpt}}</p>\n\n      	</ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\amigoconstrutorensina\amigoconstrutorensina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AmigoconstrutorensinaPage);
    return AmigoconstrutorensinaPage;
}());

//# sourceMappingURL=amigoconstrutorensina.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrocompleto_cadastrocompleto__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, blogProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.efetuaCadastro = function () {
        var nome = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/;
        var email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
        var cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!this.data.nome || !this.data.email || !this.data.cpf || !this.data.senha) {
            this.toastCtrl.create({
                message: "Preencha todos os campos corretamente.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else if (!nome.test(this.data.nome)) {
            this.toastCtrl.create({
                message: "Informe seu nome corretamente.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else if (!cpf.test(this.data.cpf)) {
            this.toastCtrl.create({
                message: "Informe um n\u00FAmero de cpf v\u00E1lido.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else if (!email.test(this.data.email)) {
            this.toastCtrl.create({
                message: "Informe um email v\u00E1lido.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
            this.validaPreCadastro();
        }
    };
    CadastroPage.prototype.efetuaCadastroFb = function () {
        this.toastCtrl.create({
            message: "Em desenvolvimento...",
            duration: 5000,
            dismissOnPageChange: true,
        }).present();
    };
    CadastroPage.prototype.validaPreCadastro = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.validaPreCadastro(this.data.email, this.data.cpf).subscribe(function (res) {
            loading.dismiss();
            // Verifica se os campos já existem
            if (res.Existencia) {
                _this.toastCtrl.create({
                    message: "Email e/ou cpf j\u00E1 cadastrados. Verifique suas informa\u00E7\u00F5es e tente novamente.",
                    duration: 5000,
                    dismissOnPageChange: true,
                }).present();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrocompleto_cadastrocompleto__["a" /* CadastrocompletoPage */], {
                    nome: _this.data.nome,
                    email: _this.data.email,
                    cpf: _this.data.cpf,
                    senha: _this.data.senha,
                });
            }
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Cadastre-se</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Cadastre-se e acesse o conteúdo exclusivo da nossa <strong>Área Técnica</strong>:</p>\n\n  	<ion-list>\n  		<ion-item>\n      		<ion-label>Nome</ion-label>\n      		<ion-input type="text" name="nome" [(ngModel)]="data.nome"></ion-input>\n    	</ion-item>\n\n    	<ion-item>\n      		<ion-label>Email</ion-label>\n      		<ion-input type="email" name="email" [(ngModel)]="data.email"></ion-input>\n    	</ion-item>\n\n    	<ion-item>\n      		<ion-label>CPF</ion-label>\n      		<ion-input type="text" name="cpf" [(ngModel)]="data.cpf"></ion-input>\n    	</ion-item>\n\n    	<ion-item>\n      		<ion-label>Senha</ion-label>\n      		<ion-input type="password" name="senha" [(ngModel)]="data.senha"></ion-input>\n    	</ion-item>\n    \n    	<br>\n    	<button ion-button color="dark" block (click)="efetuaCadastro()">Cadastrar</button>\n  </ion-list>\n\n  <p class="texto" (click)="recuperaSenha()">Ou utilize suas informações do</p>\n  <button ion-button color="blue" block (click)="efetuaCadastroFb()"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>&nbsp; Facebook</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrocompletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastrocompletoPage = /** @class */ (function () {
    function CadastrocompletoPage(navCtrl, navParams, blogProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.dataProfissao = [];
        this.dataEstado = [];
        this.dataCidade = [];
        this.checked = [];
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
    CadastrocompletoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
        this.listaProfissao();
        this.listaEstado();
    };
    CadastrocompletoPage.prototype.listaProfissao = function () {
        var _this = this;
        this.blogProvider.listaProfissao().subscribe(function (res) {
            if (res.Registros) {
                _this.dataProfissao = res.Data;
            }
        });
    };
    CadastrocompletoPage.prototype.listaEstado = function () {
        var _this = this;
        this.blogProvider.listaEstado().subscribe(function (res) {
            if (res.Registros) {
                _this.dataEstado = res.Data;
            }
        });
    };
    CadastrocompletoPage.prototype.listaCidadesPorEstado = function () {
        var _this = this;
        this.blogProvider.listaCidadesPorEstado(this.data.estado).subscribe(function (res) {
            if (res.Registros) {
                _this.dataCidade = res.Data;
            }
        });
    };
    CadastrocompletoPage.prototype.buscaCidade = function () {
        if (this.data.estado) {
            this.listaCidadesPorEstado();
            this.isDisabled2 = false;
        }
    };
    // Adds the checkedbox to the array and check if you unchecked it
    CadastrocompletoPage.prototype.atualizaProfissao = function (event, checkbox) {
        if (event.checked) {
            this.checked.push(checkbox);
        }
        else {
            var index = this.removeCheckedFromArray(checkbox);
            this.checked.splice(index, 1);
        }
        this.data.profissao = this.checked.sort(function (a, b) { return a > b ? 1 : -1; }).join(';');
    };
    // Removes checkbox from array when you uncheck it
    CadastrocompletoPage.prototype.removeCheckedFromArray = function (checkbox) {
        return this.checked.findIndex(function (category) {
            return category === checkbox;
        });
    };
    //Empties array with checkedboxes
    /*
    emptyCheckedArray() {
      this.checked = [];
    }
    */
    CadastrocompletoPage.prototype.efetuaCadastro = function () {
        if (!this.data.perfil || !this.data.profissao || !this.data.rg || !this.data.sexo || !this.data.nascimento || !this.data.celular || !this.data.telefone || !this.data.endereco || !this.data.numero || !this.data.bairro || !this.data.complemento || !this.data.cep || !this.data.estado || !this.data.cidade || !this.data.aceite) {
            this.toastCtrl.create({
                message: "Preencha todos os campos corretamente.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
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
    };
    CadastrocompletoPage.prototype.finalizaCadastro = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        // Formata os campos
        this.data.cpf = this.data.cpf.replace('.', '').replace('.', '').replace('-', '');
        this.data.celular = this.data.celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.data.telefone = this.data.telefone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.blogProvider.cadastroApp(this.data.nome, this.data.email, this.data.cpf, this.data.senha, this.data.perfil, this.data.profissao, this.data.rg, this.data.sexo, this.data.nascimento, this.data.celular, this.data.telefone, this.data.endereco, this.data.numero, this.data.bairro, this.data.complemento, this.data.cep, this.data.estado, this.data.cidade, this.data.aceite).subscribe(function (res) {
            loading.dismiss();
            // Verifica se os campos já existem
            if (res.Usuario) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {
                    cadastro: true,
                });
            }
            else {
                _this.toastCtrl.create({
                    //message: `Erro ao cadastrar. Verifique suas informações e tente novamente.`,
                    message: res.CamposInvalidos.replace(';', ''),
                    duration: 5000,
                    dismissOnPageChange: true,
                }).present();
            }
        });
    };
    CadastrocompletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrocompleto',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\cadastrocompleto\cadastrocompleto.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Cadastro</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Complete seu cadastro preenchendo os campos abaixo:</p>\n\n  	<ion-list class="list-form">\n  		<ion-item>\n      		<ion-label floating>Perfil</ion-label>\n          <ion-input type="hidden" name="perfil" [(ngModel)]="data.perfil" value="7"></ion-input>\n      		<ion-input type="text" value="Profissional de Obra" disabled="{{isDisabled1}}"></ion-input>\n    	</ion-item>\n\n    	<!--\n      <ion-item>\n      		<ion-label>Profissões</ion-label>\n      		<ion-select [(ngModel)]="data.profissao">\n            <ion-option *ngFor="let p of dataProfissao" value="{{p.ID}}">{{p.Nome}}</ion-option>\n          </ion-select>\n    	</ion-item>\n      -->\n\n      <ion-item>\n        <ion-label>Profissões</ion-label>\n      </ion-item>\n\n      <ion-item *ngFor="let p of dataProfissao">\n        <ion-label>{{p.Nome}}</ion-label>\n        <ion-checkbox (ionChange)="atualizaProfissao($event,p.ID)" color="dark">{{p.ID}}</ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Rg</ion-label>\n          <ion-input type="text" name="rg" [(ngModel)]="data.rg"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Sexo</ion-label>\n          <ion-select [(ngModel)]="data.sexo">\n            <ion-option value="1">Masculino</ion-option>\n            <ion-option value="2">Feminino</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Data de Nascimento</ion-label>\n          <ion-input type="text" name="nascimento" [(ngModel)]="data.nascimento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Telefone Celular</ion-label>\n          <ion-input type="text" name="celular" [(ngModel)]="data.celular"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Telefone Comercial</ion-label>\n          <ion-input type="text" name="telefone" [(ngModel)]="data.telefone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Endereço</ion-label>\n          <ion-input type="text" name="endereco" [(ngModel)]="data.endereco"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Número</ion-label>\n          <ion-input type="text" name="numero" [(ngModel)]="data.numero"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Bairro</ion-label>\n          <ion-input type="text" name="bairro" [(ngModel)]="data.bairro"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Complemento</ion-label>\n          <ion-input type="text" name="complemento" [(ngModel)]="data.complemento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Cep</ion-label>\n          <ion-input type="text" name="cep" [(ngModel)]="data.cep"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Estado</ion-label>\n          <ion-select [(ngModel)]="data.estado" (ionChange)="buscaCidade($event)">\n            <ion-option *ngFor="let e of dataEstado" value="{{e.ID}}">{{e.Nome}}</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Cidade</ion-label>\n          <ion-select [(ngModel)]="data.cidade" disabled="{{isDisabled2}}">\n            <ion-option *ngFor="let e of dataCidade" value="{{e.ID}}">{{e.Nome}}</ion-option>\n          </ion-select>\n      </ion-item>\n      \n      <p class="aceiteEnc">Você quer fazer parte do serviço ENCONTRE UM PROFISSIONAL e autoriza a divulgação de seus dados (nome, profissão, telefone, e-mail e endereço) na seção?</p>\n      <ion-list radio-group [(ngModel)]="data.aceite">\n        <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio value="false" selected="true"></ion-radio>\n        </ion-item>\n        <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio value="true"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      \n    \n    	<br>\n    	<button ion-button color="dark" block (click)="efetuaCadastro()">Cadastrar</button>\n  </ion-list>\n  <br><br><br>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\cadastrocompleto\cadastrocompleto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CadastrocompletoPage);
    return CadastrocompletoPage;
}());

//# sourceMappingURL=cadastrocompleto.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperasenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecuperasenhaPage = /** @class */ (function () {
    function RecuperasenhaPage(navCtrl, navParams, blogProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.data.email = '';
    }
    RecuperasenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperasenhaPage');
    };
    RecuperasenhaPage.prototype.recuperaSenha = function () {
        var _this = this;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.data.email)) {
            this.toastCtrl.create({
                message: "Informe um e-mail v\u00E1lido.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
            this.blogProvider.recuperaSenha(this.data.email).subscribe(function (blog) {
                if (blog.Registros) {
                    //this.navCtrl.push(LoginPage);
                    // Reseta o campo email
                    _this.data.email = null;
                }
                _this.toastCtrl.create({
                    message: blog.Feedback,
                    duration: 5000
                }).present();
            });
        }
    };
    RecuperasenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperasenha',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\recuperasenha\recuperasenha.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Recuperar Senha</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Insira seu e-mail cadastrado para receber sua senha:</p>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>E-mail</ion-label>\n      <ion-input type="text" id="email" name="email" [(ngModel)]="data.email"></ion-input>\n    </ion-item>\n\n    <br>\n  	<button ion-button color="dark" full (click)="recuperaSenha()">Recuperar</button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\recuperasenha\recuperasenha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RecuperasenhaPage);
    return RecuperasenhaPage;
}());

//# sourceMappingURL=recuperasenha.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhemapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhemapaPage = /** @class */ (function () {
    function DetalhemapaPage(navCtrl, navParams, blogProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.id = navParams.get("id");
    }
    DetalhemapaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhePage');
        this.listaEncProfissionalId();
    };
    DetalhemapaPage.prototype.listaEncProfissionalId = function () {
        var _this = this;
        this.blogProvider.listaEncProfissionalId(this.id).subscribe(function (blog) {
            _this.blog = blog.Data;
            _this.blog.forEach(function (Data) {
                _this.initializeMap(Data["Latitude"], Data["Longitude"], _this.blog);
            });
        });
    };
    DetalhemapaPage.prototype.initializeMap = function (latitude, longitude, data) {
        var _this = this;
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
            // Add marker
            _this.addMarker(latitude, longitude, data);
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    DetalhemapaPage.prototype.addMarker = function (latitude, longitude, data) {
        var marker = new google.maps.Marker({
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
        data.forEach(function (Data) {
            id = Data["id"];
            Nome = Data["Nome"];
            Especialidade = Data["Especialidade"];
            Cidade = Data["Cidade"];
            Estado = Data["Estado"];
            Latitude = Data["Latitude"];
            Longitude = Data["Longitude"];
            Email = Data["Email"];
            Telefone = Data["Telefone"];
            TelNumero = Data["TelNumero"];
        });
        var content = '<p><strong>Nome:</strong> ' + Nome + '</p>' +
            '<p><strong>Telefone:</strong> <a href="tel:' + TelNumero + '">' + Telefone + '</a></p>' +
            '<p><strong>E-mail:</strong> <a href="mailto:' + Email + '">' + Email + '</a></p>' +
            '<p><strong>Especialidade:</strong> ' + Especialidade + '</p>';
        this.addInfoWindow(marker, content);
    };
    DetalhemapaPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
        infoWindow.open(this.map, marker);
    };
    DetalhemapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhemapa',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\detalhemapa\detalhemapa.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title *ngFor="let b of blog">{{b.Nome}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!--<ion-content padding>\n	<ion-card *ngFor="let b of blog" class="card card-md">\n      	<ion-card-content>\n          <p class="fCat cat{{b.id_cat}}">{{b.category}}</p>\n          <ion-card-title>{{b.title}}</ion-card-title>\n      		<p class="fData">{{b.date}}</p>\n        	<img src="{{b.image}}" class="thumb" />\n\n          <div [innerHtml]="b.content" class="contText"></div>\n      	</ion-card-content>\n    </ion-card>\n</ion-content>-->\n\n<ion-content>\n	<div id="map_canvas"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\detalhemapa\detalhemapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */]])
    ], DetalhemapaPage);
    return DetalhemapaPage;
}());

//# sourceMappingURL=detalhemapa.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfissionalbuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profissional_profissional__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfissionalbuscaPage = /** @class */ (function () {
    function ProfissionalbuscaPage(navCtrl, navParams, blogProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.estado = [];
        this.cidade = [];
        this.especialidade = [];
        this.itensPorPagina = 20;
        this.paginaAtual = 1;
        this.isDisabled1 = true;
        this.isDisabled2 = true;
        this.inputEstado = navParams.get("idEstado");
        this.inputCidade = navParams.get("idCidade");
        this.inputEspecialidade = navParams.get("idEspecialidade");
        if (this.inputEstado) {
            this.isDisabled1 = false;
            this.listaCidadesPorEstadoFiltroEncontreProfissional();
        }
        if (this.inputCidade) {
            this.isDisabled2 = false;
            this.listaEspecialidadesPorCidadeFiltroEncontreProfissional();
        }
    }
    ProfissionalbuscaPage.prototype.ionViewDidLoad = function () {
        this.listaEstadosFiltroEncontreProfissional();
    };
    ProfissionalbuscaPage.prototype.listaEstadosFiltroEncontreProfissional = function () {
        /*let loading = this.loadingCtrl.create({
          content: 'Carregando...'
        });*/
        var _this = this;
        //loading.present();
        this.blogProvider.listaEstadosFiltroEncontreProfissional().subscribe(function (estado) {
            //loading.dismiss();
            if (estado.Registros) {
                _this.estado = estado.Data;
            }
        });
    };
    ProfissionalbuscaPage.prototype.listaCidadesPorEstadoFiltroEncontreProfissional = function () {
        /*let loading = this.loadingCtrl.create({
          content: 'Carregando...'
        });*/
        var _this = this;
        //loading.present();
        this.blogProvider.listaCidadesPorEstadoFiltroEncontreProfissional(this.inputEstado).subscribe(function (cidade) {
            //loading.dismiss();
            if (cidade.Registros) {
                _this.cidade = cidade.Data;
            }
        });
    };
    ProfissionalbuscaPage.prototype.listaEspecialidadesPorCidadeFiltroEncontreProfissional = function () {
        /*let loading = this.loadingCtrl.create({
          content: 'Carregando...'
        });*/
        var _this = this;
        //loading.present();
        this.blogProvider.listaEspecialidadesPorCidadeFiltroEncontreProfissional(this.inputEstado, this.inputCidade).subscribe(function (especialidade) {
            //loading.dismiss();
            if (especialidade.Registros) {
                _this.especialidade = especialidade.Data;
            }
        });
    };
    ProfissionalbuscaPage.prototype.buscaCidade = function () {
        this.cidade = null;
        this.especialidade = null;
        this.inputCidade = 0;
        this.inputEspecialidade = 0;
        if (this.inputEstado) {
            this.listaCidadesPorEstadoFiltroEncontreProfissional();
            this.isDisabled1 = false;
        }
    };
    ProfissionalbuscaPage.prototype.buscaEspecialidade = function () {
        this.especialidade = null;
        this.inputEspecialidade = 0;
        if (this.inputCidade) {
            this.listaEspecialidadesPorCidadeFiltroEncontreProfissional();
            this.isDisabled2 = false;
        }
    };
    ProfissionalbuscaPage.prototype.pesquisaProfissional = function () {
        if (!this.inputEstado) {
            this.toastCtrl.create({
                message: "Para continuar, selecione o estado.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profissional_profissional__["a" /* ProfissionalPage */], {
                idEstado: this.inputEstado,
                idCidade: this.inputCidade,
                idEspecialidade: this.inputEspecialidade,
            });
        }
    };
    ProfissionalbuscaPage.prototype.limpaCampo = function () {
        this.inputEstado = null;
        this.inputCidade = null;
        this.inputEspecialidade = null;
        this.isDisabled1 = true;
        this.isDisabled2 = true;
    };
    ProfissionalbuscaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profissionalbusca',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\profissionalbusca\profissionalbusca.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Pesquisar Profissional</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Para encontrar um especialista em obra próximo a você, primeiro selecione o Estado de interesse, a Cidade e, em seguida, a Especialidade.</p>\n\n  <ion-item class="itemEstado">\n    <ion-label>Selecione o estado</ion-label>\n    <ion-select [(ngModel)]="inputEstado" (ionChange)="buscaCidade($event)">\n        <!--<ion-option value="0">--</ion-option>-->\n        <ion-option *ngFor="let e of estado" value="{{e.ID}}">{{e.Nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="itemCidade">\n    <ion-label>Selecione a cidade</ion-label>\n    <ion-select [(ngModel)]="inputCidade" (ionChange)="buscaEspecialidade($event)" disabled="{{isDisabled1}}">\n        <!--<ion-option value="0">--</ion-option>-->\n        <ion-option *ngFor="let c of cidade" value="{{c.ID}}">{{c.Nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="itemCidade">\n    <ion-label>Selecione a especialidade</ion-label>\n    <ion-select [(ngModel)]="inputEspecialidade" disabled="{{isDisabled2}}">\n        <!--<ion-option value="0">--</ion-option>-->\n        <ion-option *ngFor="let s of especialidade" value="{{s.ID}}">{{s.Nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button color="light" (click)="limpaCampo()">Limpar</button>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button color="dark" full (click)="pesquisaProfissional()">Pesquisar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\profissionalbusca\profissionalbusca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ProfissionalbuscaPage);
    return ProfissionalbuscaPage;
}());

//# sourceMappingURL=profissionalbusca.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComosefazPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComosefazPage = /** @class */ (function () {
    function ComosefazPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    ComosefazPage.prototype.ionViewDidLoad = function () {
        this.listaBlogComoSeFaz();
    };
    ComosefazPage.prototype.listaBlogComoSeFaz = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlogComoSeFaz(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
        });
    };
    ComosefazPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    ComosefazPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlogComoSeFaz(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    ComosefazPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comosefaz',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\comosefaz\comosefaz.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Como se faz</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n      	<img src="{{b.image}}"/>\n  \n      	<ion-card-content>\n      		<p class="fData">{{b.date}}</p>\n        	<ion-card-title>{{b.title}}</ion-card-title>\n        	<p class="fCat">{{b.category}}</p>\n        	<p>{{b.excerpt}}</p>\n      	</ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\comosefaz\comosefaz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ComosefazPage);
    return ComosefazPage;
}());

//# sourceMappingURL=comosefaz.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InstitucionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstitucionalPage = /** @class */ (function () {
    function InstitucionalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InstitucionalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstitucionalPage');
    };
    InstitucionalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-institucional',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\institucional\institucional.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Quem Somos</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>O Amigo Construtor é um projeto de comunicação e de relacionamento da InterCement, fabricante dos cimentos Cauê, Cimpor, Zebu e Goiás, para se aproximar cada vez mais dos profissionais que trabalham na Construção Civil.</p>\n	<p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da construção, além de dicas, conversas com especialistas, vídeos, teste de conhecimentos e muito mais.</p>\n	<p>Então, fique à vontade para participar e compartilhar suas experiências com a gente.</p>\n	<p>Será um prazer ter você por aqui acompanhando nossas novidades!</p>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\institucional\institucional.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InstitucionalPage);
    return InstitucionalPage;
}());

//# sourceMappingURL=institucional.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaobuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao_localizacao__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizacaobuscaPage = /** @class */ (function () {
    function LocalizacaobuscaPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.inputCep = navParams.get("cep");
        this.inputRaio = navParams.get("raio");
    }
    LocalizacaobuscaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalizacaobuscaPage');
    };
    LocalizacaobuscaPage.prototype.pesquisaProfissional = function () {
        if (!this.inputRaio || !this.inputCep) {
            this.toastCtrl.create({
                message: "Para continuar, informe o cep e o raio.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
            /*this.navCtrl.push(LocalizacaoPage, {
                cep: this.inputCep,
                raio: this.inputRaio,
              });*/
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__localizacao_localizacao__["a" /* LocalizacaoPage */], {
                cep: this.inputCep,
                raio: this.inputRaio,
            });
        }
    };
    LocalizacaobuscaPage.prototype.limpaCampo = function () {
        this.inputCep = null;
        this.inputRaio = null;
    };
    LocalizacaobuscaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-localizacaobusca',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\localizacaobusca\localizacaobusca.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Pesquisar Lojas</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  	<p>Para localizar mais lojas, utilize as opções de pesquisa abaixo ou ative sua localização e tente novamente.</p>\n\n  	<ion-item class="itemCep">\n    	<ion-label>Informe o cep</ion-label>\n    	<ion-input [(ngModel)]="inputCep" name="inputCep"></ion-input>\n  	</ion-item>\n\n  	<ion-item class="itemRaio">\n    	<ion-label>Selecione o raio</ion-label>\n    	<ion-select [(ngModel)]="inputRaio" name="inputRaio">\n        	<ion-option value="1">Raio de 1km</ion-option>\n        	<ion-option value="2">Raio de 2km</ion-option>\n          <ion-option value="3">Raio de 3km</ion-option>\n          <ion-option value="4">Raio de 4km</ion-option>\n        	<ion-option value="5">Raio de 5km</ion-option>\n          <ion-option value="6">Raio de 6km</ion-option>\n          <ion-option value="7">Raio de 7km</ion-option>\n          <ion-option value="8">Raio de 8km</ion-option>\n          <ion-option value="9">Raio de 9km</ion-option>\n        	<ion-option value="10">Raio de 10km</ion-option>\n    	</ion-select>\n  	</ion-item>\n\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button color="light" (click)="limpaCampo()">Limpar</button>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button color="dark" full (click)="pesquisaProfissional()">Pesquisar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\localizacaobusca\localizacaobusca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LocalizacaobuscaPage);
    return LocalizacaobuscaPage;
}());

//# sourceMappingURL=localizacaobusca.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MercadoPage = /** @class */ (function () {
    function MercadoPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    MercadoPage.prototype.ionViewDidLoad = function () {
        this.listaBlogMercado();
    };
    MercadoPage.prototype.listaBlogMercado = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlogMercado(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
        });
    };
    MercadoPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    MercadoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlogMercado(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    MercadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mercado',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\mercado\mercado.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Mercado</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n      	<img src="{{b.image}}"/>\n  \n      	<ion-card-content>\n      		<p class="fData">{{b.date}}</p>\n        	<ion-card-title>{{b.title}}</ion-card-title>\n        	<!--<p *ngIf="b.id_cat == 5" class="fCat">{{b.category}}</p>-->\n        	<p class="fCat">{{b.category}}</p>\n        	<p>{{b.excerpt}}</p>\n      	</ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\mercado\mercado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MercadoPage);
    return MercadoPage;
}());

//# sourceMappingURL=mercado.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RededoamigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RededoamigoPage = /** @class */ (function () {
    function RededoamigoPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    RededoamigoPage.prototype.ionViewDidLoad = function () {
        this.listaBlogRedeAmigo();
    };
    RededoamigoPage.prototype.listaBlogRedeAmigo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlogRedeAmigo(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
        });
    };
    RededoamigoPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    RededoamigoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlogRedeAmigo(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    RededoamigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rededoamigo',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\rededoamigo\rededoamigo.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Rede do Amigo</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n      	<img src="{{b.image}}"/>\n  \n      	<ion-card-content>\n      		<p class="fData">{{b.date}}</p>\n        	<ion-card-title>{{b.title}}</ion-card-title>\n        	<!--<p *ngIf="b.id_cat == 5" class="fCat">{{b.category}}</p>-->\n        	<p class="fCat">{{b.category}}</p>\n        	<p>{{b.excerpt}}</p>\n      	</ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\rededoamigo\rededoamigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RededoamigoPage);
    return RededoamigoPage;
}());

//# sourceMappingURL=rededoamigo.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosPage = /** @class */ (function () {
    function VideosPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        this.listaBlogVideo();
    };
    VideosPage.prototype.listaBlogVideo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlogVideo(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
        });
    };
    VideosPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    VideosPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlogVideo(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\videos\videos.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Vídeos</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n      	<img src="{{b.image}}"/>\n  \n      	<ion-card-content>\n      		<p class="fData">{{b.date}}</p>\n        	<ion-card-title>{{b.title}}</ion-card-title>\n        	<!--<p *ngIf="b.id_cat == 5" class="fCat">{{b.category}}</p>-->\n        	<p class="fCat">{{b.category}}</p>\n        	<p>{{b.excerpt}}</p>\n      	</ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\videos\videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/amigoconstrutorensina/amigoconstrutorensina.module": [
		295,
		17
	],
	"../pages/cadastro/cadastro.module": [
		296,
		16
	],
	"../pages/cadastrocompleto/cadastrocompleto.module": [
		297,
		15
	],
	"../pages/comosefaz/comosefaz.module": [
		298,
		14
	],
	"../pages/detalhe/detalhe.module": [
		299,
		13
	],
	"../pages/detalhemapa/detalhemapa.module": [
		300,
		12
	],
	"../pages/edicaocadastro/edicaocadastro.module": [
		301,
		11
	],
	"../pages/homelogado/homelogado.module": [
		302,
		10
	],
	"../pages/institucional/institucional.module": [
		303,
		9
	],
	"../pages/localizacao/localizacao.module": [
		312,
		8
	],
	"../pages/localizacaobusca/localizacaobusca.module": [
		304,
		7
	],
	"../pages/login/login.module": [
		305,
		6
	],
	"../pages/mercado/mercado.module": [
		306,
		5
	],
	"../pages/profissional/profissional.module": [
		307,
		4
	],
	"../pages/profissionalbusca/profissionalbusca.module": [
		308,
		3
	],
	"../pages/recuperasenha/recuperasenha.module": [
		309,
		2
	],
	"../pages/rededoamigo/rededoamigo.module": [
		310,
		1
	],
	"../pages/videos/videos.module": [
		311,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaocadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EdicaocadastroPage = /** @class */ (function () {
    function EdicaocadastroPage(navCtrl, navParams, blogProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.dataProfissao = [];
        this.dataEstado = [];
        this.dataCidade = [];
        this.checked = [];
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
    EdicaocadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
        this.listaProfissao();
        this.listaEstado();
    };
    EdicaocadastroPage.prototype.listaProfissao = function () {
        var _this = this;
        this.blogProvider.listaProfissao().subscribe(function (res) {
            if (res.Registros) {
                _this.dataProfissao = res.Data;
            }
        });
    };
    EdicaocadastroPage.prototype.listaEstado = function () {
        var _this = this;
        this.blogProvider.listaEstado().subscribe(function (res) {
            if (res.Registros) {
                _this.dataEstado = res.Data;
            }
        });
    };
    EdicaocadastroPage.prototype.listaCidadesPorEstado = function () {
        var _this = this;
        this.blogProvider.listaCidadesPorEstado(this.data.estado).subscribe(function (res) {
            if (res.Registros) {
                _this.dataCidade = res.Data;
            }
        });
    };
    EdicaocadastroPage.prototype.buscaCidade = function () {
        if (this.data.estado) {
            this.listaCidadesPorEstado();
            this.isDisabled2 = false;
        }
    };
    // Adds the checkedbox to the array and check if you unchecked it
    EdicaocadastroPage.prototype.atualizaProfissao = function (event, checkbox) {
        if (event.checked) {
            this.checked.push(checkbox);
        }
        else {
            var index = this.removeCheckedFromArray(checkbox);
            this.checked.splice(index, 1);
        }
        this.data.profissao = this.checked.sort(function (a, b) { return a > b ? 1 : -1; }).join(';');
    };
    // Removes checkbox from array when you uncheck it
    EdicaocadastroPage.prototype.removeCheckedFromArray = function (checkbox) {
        return this.checked.findIndex(function (category) {
            return category === checkbox;
        });
    };
    //Empties array with checkedboxes
    /*
    emptyCheckedArray() {
      this.checked = [];
    }
    */
    EdicaocadastroPage.prototype.efetuaCadastro = function () {
        if (!this.data.perfil || !this.data.profissao || !this.data.rg || !this.data.sexo || !this.data.nascimento || !this.data.celular || !this.data.telefone || !this.data.endereco || !this.data.numero || !this.data.bairro || !this.data.complemento || !this.data.cep || !this.data.estado || !this.data.cidade || !this.data.aceite) {
            this.toastCtrl.create({
                message: "Preencha todos os campos corretamente.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
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
    };
    EdicaocadastroPage.prototype.finalizaCadastro = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        // Formata os campos
        this.data.cpf = this.data.cpf.replace('.', '').replace('.', '').replace('-', '');
        this.data.celular = this.data.celular.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.data.telefone = this.data.telefone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
        this.blogProvider.cadastroApp(this.data.nome, this.data.email, this.data.cpf, this.data.senha, this.data.perfil, this.data.profissao, this.data.rg, this.data.sexo, this.data.nascimento, this.data.celular, this.data.telefone, this.data.endereco, this.data.numero, this.data.bairro, this.data.complemento, this.data.cep, this.data.estado, this.data.cidade, this.data.aceite).subscribe(function (res) {
            loading.dismiss();
            // Verifica se os campos já existem
            if (res.Usuario) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {
                    cadastro: true,
                });
            }
            else {
                _this.toastCtrl.create({
                    //message: `Erro ao cadastrar. Verifique suas informações e tente novamente.`,
                    message: res.CamposInvalidos.replace(';', ''),
                    duration: 5000,
                    dismissOnPageChange: true,
                }).present();
            }
        });
    };
    EdicaocadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edicaocadastro',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\edicaocadastro\edicaocadastro.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Meus Dados</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!--<p>Complete seu cadastro preenchendo os campos abaixo:</p>-->\n\n  	<ion-list class="list-form">\n  		<ion-item>\n      		<ion-label floating>Perfil</ion-label>\n          <ion-input type="hidden" name="perfil" [(ngModel)]="data.perfil" value="7"></ion-input>\n      		<ion-input type="text" value="Profissional de Obra" disabled="{{isDisabled1}}"></ion-input>\n    	</ion-item>\n\n    	<!--\n      <ion-item>\n      		<ion-label>Profissões</ion-label>\n      		<ion-select [(ngModel)]="data.profissao">\n            <ion-option *ngFor="let p of dataProfissao" value="{{p.ID}}">{{p.Nome}}</ion-option>\n          </ion-select>\n    	</ion-item>\n      -->\n\n      <ion-item>\n        <ion-label>Profissões</ion-label>\n      </ion-item>\n\n      <ion-item *ngFor="let p of dataProfissao">\n        <ion-label>{{p.Nome}}</ion-label>\n        <ion-checkbox (ionChange)="atualizaProfissao($event,p.ID)" color="dark">{{p.ID}}</ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Rg</ion-label>\n          <ion-input type="text" name="rg" [(ngModel)]="data.rg"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Sexo</ion-label>\n          <ion-select [(ngModel)]="data.sexo">\n            <ion-option value="1">Masculino</ion-option>\n            <ion-option value="2">Feminino</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Data de Nascimento</ion-label>\n          <ion-input type="text" name="nascimento" [(ngModel)]="data.nascimento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Telefone Celular</ion-label>\n          <ion-input type="text" name="celular" [(ngModel)]="data.celular"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Telefone Comercial</ion-label>\n          <ion-input type="text" name="telefone" [(ngModel)]="data.telefone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Endereço</ion-label>\n          <ion-input type="text" name="endereco" [(ngModel)]="data.endereco"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Número</ion-label>\n          <ion-input type="text" name="numero" [(ngModel)]="data.numero"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Bairro</ion-label>\n          <ion-input type="text" name="bairro" [(ngModel)]="data.bairro"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Complemento</ion-label>\n          <ion-input type="text" name="complemento" [(ngModel)]="data.complemento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Cep</ion-label>\n          <ion-input type="text" name="cep" [(ngModel)]="data.cep"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Estado</ion-label>\n          <ion-select [(ngModel)]="data.estado" (ionChange)="buscaCidade($event)">\n            <ion-option *ngFor="let e of dataEstado" value="{{e.ID}}">{{e.Nome}}</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Cidade</ion-label>\n          <ion-select [(ngModel)]="data.cidade" disabled="{{isDisabled2}}">\n            <ion-option *ngFor="let e of dataCidade" value="{{e.ID}}">{{e.Nome}}</ion-option>\n          </ion-select>\n      </ion-item>\n      \n      <p class="aceiteEnc">Você quer fazer parte do serviço ENCONTRE UM PROFISSIONAL e autoriza a divulgação de seus dados (nome, profissão, telefone, e-mail e endereço) na seção?</p>\n      <ion-list radio-group [(ngModel)]="data.aceite">\n        <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio value="false" selected="true"></ion-radio>\n        </ion-item>\n        <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio value="true"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      \n    \n    	<br>\n    	<button ion-button color="dark" block (click)="efetuaEdicao()">Alterar</button>\n  </ion-list>\n  <br><br><br>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\edicaocadastro\edicaocadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EdicaocadastroPage);
    return EdicaocadastroPage;
}());

//# sourceMappingURL=edicaocadastro.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhePage = /** @class */ (function () {
    function DetalhePage(navCtrl, navParams, blogProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.id = navParams.get("id");
    }
    DetalhePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhePage');
        this.listaBlog();
    };
    DetalhePage.prototype.listaBlog = function () {
        var _this = this;
        this.blogProvider.listaBlogPost(this.id)
            .subscribe(function (blog) { return _this.blog = blog.Data; });
    };
    DetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\detalhe\detalhe.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Detalhes do Post</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card *ngFor="let b of blog" class="detalhe card card-md bCat{{b.id_cat}}">\n      	<ion-card-content>\n          <p class="fCat cat{{b.id_cat}}">{{b.category}}</p>\n          <ion-card-title>{{b.title}}</ion-card-title>\n      		<p class="fData">{{b.date}}</p>\n        	<img src="{{b.image}}" class="thumb" />\n        	<!--<p>{{strip(br2nl(b.content))}}</p>-->\n\n          <div [innerHtml]="b.content" class="contText"></div>\n      	</ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\detalhe\detalhe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */]])
    ], DetalhePage);
    return DetalhePage;
}());

//# sourceMappingURL=detalhe.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_amigoconstrutorensina_amigoconstrutorensina__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastrocompleto_cadastrocompleto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_comosefaz_comosefaz__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalhe_detalhe__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalhemapa_detalhemapa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edicaocadastro_edicaocadastro__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_homelogado_homelogado__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_institucional_institucional__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_localizacao_localizacao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_localizacaobusca_localizacaobusca__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mercado_mercado__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profissional_profissional__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profissionalbusca_profissionalbusca__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_recuperasenha_recuperasenha__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_rededoamigo_rededoamigo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_videos_videos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_amigoconstrutorensina_amigoconstrutorensina__["a" /* AmigoconstrutorensinaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastrocompleto_cadastrocompleto__["a" /* CadastrocompletoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_comosefaz_comosefaz__["a" /* ComosefazPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalhe_detalhe__["a" /* DetalhePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalhemapa_detalhemapa__["a" /* DetalhemapaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edicaocadastro_edicaocadastro__["a" /* EdicaocadastroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_homelogado_homelogado__["a" /* HomelogadoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_institucional_institucional__["a" /* InstitucionalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_localizacaobusca_localizacaobusca__["a" /* LocalizacaobuscaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mercado_mercado__["a" /* MercadoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profissional_profissional__["a" /* ProfissionalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profissionalbusca_profissionalbusca__["a" /* ProfissionalbuscaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recuperasenha_recuperasenha__["a" /* RecuperasenhaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_rededoamigo_rededoamigo__["a" /* RededoamigoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_videos_videos__["a" /* VideosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/amigoconstrutorensina/amigoconstrutorensina.module#AmigoconstrutorensinaPageModule', name: 'AmigoconstrutorensinaPage', segment: 'amigoconstrutorensina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrocompleto/cadastrocompleto.module#CadastrocompletoPageModule', name: 'CadastrocompletoPage', segment: 'cadastrocompleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comosefaz/comosefaz.module#ComosefazPageModule', name: 'ComosefazPage', segment: 'comosefaz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe/detalhe.module#DetalhePageModule', name: 'DetalhePage', segment: 'detalhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhemapa/detalhemapa.module#DetalhemapaPageModule', name: 'DetalhemapaPage', segment: 'detalhemapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edicaocadastro/edicaocadastro.module#EdicaocadastroPageModule', name: 'EdicaocadastroPage', segment: 'edicaocadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homelogado/homelogado.module#HomelogadoPageModule', name: 'HomelogadoPage', segment: 'homelogado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/institucional/institucional.module#InstitucionalPageModule', name: 'InstitucionalPage', segment: 'institucional', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizacaobusca/localizacaobusca.module#LocalizacaobuscaPageModule', name: 'LocalizacaobuscaPage', segment: 'localizacaobusca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mercado/mercado.module#MercadoPageModule', name: 'MercadoPage', segment: 'mercado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profissional/profissional.module#ProfissionalPageModule', name: 'ProfissionalPage', segment: 'profissional', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profissionalbusca/profissionalbusca.module#ProfissionalbuscaPageModule', name: 'ProfissionalbuscaPage', segment: 'profissionalbusca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperasenha/recuperasenha.module#RecuperasenhaPageModule', name: 'RecuperasenhaPage', segment: 'recuperasenha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rededoamigo/rededoamigo.module#RededoamigoPageModule', name: 'RededoamigoPage', segment: 'rededoamigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizacao/localizacao.module#LocalizacaoPageModule', name: 'LocalizacaoPage', segment: 'localizacao', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_amigoconstrutorensina_amigoconstrutorensina__["a" /* AmigoconstrutorensinaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastrocompleto_cadastrocompleto__["a" /* CadastrocompletoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_comosefaz_comosefaz__["a" /* ComosefazPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalhe_detalhe__["a" /* DetalhePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalhemapa_detalhemapa__["a" /* DetalhemapaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edicaocadastro_edicaocadastro__["a" /* EdicaocadastroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_homelogado_homelogado__["a" /* HomelogadoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_institucional_institucional__["a" /* InstitucionalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_localizacaobusca_localizacaobusca__["a" /* LocalizacaobuscaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mercado_mercado__["a" /* MercadoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profissional_profissional__["a" /* ProfissionalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profissionalbusca_profissionalbusca__["a" /* ProfissionalbuscaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recuperasenha_recuperasenha__["a" /* RecuperasenhaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_rededoamigo_rededoamigo__["a" /* RededoamigoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_videos_videos__["a" /* VideosPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_blog_blog__["a" /* BlogProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_amigoconstrutorensina_amigoconstrutorensina__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_comosefaz_comosefaz__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edicaocadastro_edicaocadastro__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_homelogado_homelogado__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_institucional_institucional__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_localizacao_localizacao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mercado_mercado__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profissional_profissional__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_rededoamigo_rededoamigo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_videos_videos__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { class: 'restrita', title: 'Área Restrita', component: __WEBPACK_IMPORTED_MODULE_10__pages_homelogado_homelogado__["a" /* HomelogadoPage */] },
            { class: 'meus-dados', title: '• Meus Dados', component: __WEBPACK_IMPORTED_MODULE_8__pages_edicaocadastro_edicaocadastro__["a" /* EdicaocadastroPage */] },
            { class: 'cad-profi', title: '• Cadastre-se como um Profissional', component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */] },
            { class: 'home', title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
            { class: 'ensina', title: '• Amigo Construtor Ensina', component: __WEBPACK_IMPORTED_MODULE_5__pages_amigoconstrutorensina_amigoconstrutorensina__["a" /* AmigoconstrutorensinaPage */] },
            { class: 'como-faz', title: '• Como se faz', component: __WEBPACK_IMPORTED_MODULE_7__pages_comosefaz_comosefaz__["a" /* ComosefazPage */] },
            { class: 'mercado', title: '• Mercado', component: __WEBPACK_IMPORTED_MODULE_14__pages_mercado_mercado__["a" /* MercadoPage */] },
            { class: 'rede-amigo', title: '• Rede do Amigo', component: __WEBPACK_IMPORTED_MODULE_16__pages_rededoamigo_rededoamigo__["a" /* RededoamigoPage */] },
            { class: 'video', title: '• Vídeos', component: __WEBPACK_IMPORTED_MODULE_17__pages_videos_videos__["a" /* VideosPage */] },
            { class: 'quem-somos', title: 'Institucional', component: __WEBPACK_IMPORTED_MODULE_11__pages_institucional_institucional__["a" /* InstitucionalPage */] },
            { class: 'produto', title: 'Produtos', component: __WEBPACK_IMPORTED_MODULE_11__pages_institucional_institucional__["a" /* InstitucionalPage */] },
            { class: 'encontre', title: 'Encontre um Profissional', component: __WEBPACK_IMPORTED_MODULE_15__pages_profissional_profissional__["a" /* ProfissionalPage */] },
            { class: 'localizacao', title: 'Localização das Lojas', component: __WEBPACK_IMPORTED_MODULE_12__pages_localizacao_localizacao__["a" /* LocalizacaoPage */] },
            { class: 'fale-conosco', title: 'Fale Conosco', component: __WEBPACK_IMPORTED_MODULE_11__pages_institucional_institucional__["a" /* InstitucionalPage */] },
            { class: 'cadastro', title: 'Cadastre-se', component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */] },
            { class: 'login', title: 'Faça seu Login', component: __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */] },
        ];
        // Recupera a sessão local
        storage.get('usuario').then(function (name) {
            // Verifica se o usuário está logado
            if (name) {
                // Ajusta o menu
                document.getElementById("restrita").style.display = "block";
                document.getElementById("meus-dados").style.display = "block";
                document.getElementById("cad-profi").style.display = "block";
                document.getElementById("cadastro").style.display = "none";
                document.getElementById("login").style.display = "none";
                // Direciona para a página restrita
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_homelogado_homelogado__["a" /* HomelogadoPage */];
            }
            else {
                // Ajusta o menu
                document.getElementById("restrita").style.display = "none";
                document.getElementById("meus-dados").style.display = "none";
                document.getElementById("cad-profi").style.display = "none";
                document.getElementById("cadastro").style.display = "block";
                document.getElementById("login").style.display = "block";
                // Direciona para a página inicial
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
            }
        });
        //this.rootPage = LoginPage;
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == 'Produtos') {
            window.open('http://brasil.intercement.com/ProdutosServicos/produtos_servicos', '_system');
        }
        else if (page.title == 'Fale Conosco') {
            window.open('http://brasil.intercement.com/atendimento', '_system');
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" id="{{p.class}}">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recuperasenha_recuperasenha__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homelogado_homelogado__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, blogProvider, toastCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
        this.data = {};
        this.blog = [];
        this.data.username = '';
        this.data.password = '';
        this.data.response = '';
        // Verifica se houve cadastro de usuário
        if (navParams.get("cadastro")) {
            this.toastCtrl.create({
                message: "Cadastro realizado com sucesso. Para acessar sua conta, utilize os campos acima.",
                duration: 5000,
            }).present();
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.efetuaLogin = function () {
        var _this = this;
        var cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!this.data.username || !this.data.password) {
            this.toastCtrl.create({
                message: "Preencha todos os campos corretamente.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else if (!cpf.test(this.data.username)) {
            this.toastCtrl.create({
                message: "Informe um n\u00FAmero de cpf v\u00E1lido.",
                duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }
        else {
            this.data.username = this.data.username.replace('.', '').replace('.', '').replace('-', '');
            this.blogProvider.login(this.data.username, this.data.password).subscribe(function (blog) {
                if (blog.Registros) {
                    // Define o valor da sessão
                    _this.storage.set('usuario', blog.Data[0].Nome);
                    // Ajusta o menu
                    document.getElementById("restrita").style.display = "block";
                    document.getElementById("meus-dados").style.display = "block";
                    document.getElementById("cad-profi").style.display = "block";
                    document.getElementById("login").style.display = "none";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__homelogado_homelogado__["a" /* HomelogadoPage */]);
                }
                else {
                    _this.toastCtrl.create({
                        message: "Cpf e/ou senha n\u00E3o encontrados. Tente novamente.",
                        duration: 5000,
                        dismissOnPageChange: true,
                    }).present();
                }
            });
        }
    };
    LoginPage.prototype.recuperaSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recuperasenha_recuperasenha__["a" /* RecuperasenhaPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\login\login.html"*/'<ion-header>\n  	<ion-navbar>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Faça seu Login</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p><strong>Já é cadastrado?</strong> Faça aqui seu login, utilizando seu CPF e senha:</p>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>CPF</ion-label>\n      <ion-input type="text" name="username" [(ngModel)]="data.username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Senha</ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="data.password"></ion-input>\n    </ion-item>\n    \n    <br>\n    <button ion-button color="dark" block (click)="efetuaLogin()">Entrar</button>\n  </ion-list>\n\n  <p class="link" (click)="recuperaSenha()">Esqueci minha senha</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfissionalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhemapa_detalhemapa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profissionalbusca_profissionalbusca__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfissionalPage = /** @class */ (function () {
    function ProfissionalPage(navCtrl, navParams, blogProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.loadingCtrl = loadingCtrl;
        this.blog = [];
        this.itensPorPagina = 20;
        this.paginaAtual = 1;
        this.idEstado = navParams.get("idEstado");
        this.idCidade = navParams.get("idCidade");
        this.idEspecialidade = navParams.get("idEspecialidade");
    }
    ProfissionalPage.prototype.ionViewDidLoad = function () {
        this.listaEncProfissional();
    };
    ProfissionalPage.prototype.listaEncProfissional = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaEncProfissional(this.idEstado, this.idCidade, this.idEspecialidade, this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registros) {
                _this.blog = blog.Data;
            }
        });
    };
    ProfissionalPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhemapa_detalhemapa__["a" /* DetalhemapaPage */], {
            id: id
        });
    };
    ProfissionalPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaEncProfissional(_this.idEstado, _this.idCidade, _this.idEspecialidade, _this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registros) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    ProfissionalPage.prototype.pesquisaProfissional = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profissionalbusca_profissionalbusca__["a" /* ProfissionalbuscaPage */], {
            idEstado: this.idEstado,
            idCidade: this.idCidade,
            idEspecialidade: this.idEspecialidade,
        });
    };
    ProfissionalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profissional',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\profissional\profissional.html"*/'<ion-header>\n	<ion-navbar hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Encontre um Profissional</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="pesquisaProfissional()">\n          <!--<ion-icon name="funnel" [style.color]="filtradoPorCategoria ? \'orange\' : \'gray\'"></ion-icon>-->\n          <ion-icon name="ios-funnel" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	 <ion-card *ngFor="let b of blog">\n      	<ion-card-content>\n      		<ion-card-title>{{b.Nome}}</ion-card-title>\n        	<p><strong>Região:</strong> {{b.Cidade}}/{{b.Estado}}</p>\n        	<p [class]="b.Telefone ? \'\' : \'esconde\'"><strong>Telefone:</strong> <a href="tel:{{b.TelNumero}}">{{b.Telefone}}</a></p>\n        	<p [class]="b.Email ? \'\' : \'esconde\'"><strong>E-mail:</strong> <a href="mailto:{{b.Email}}">{{b.Email}}</a></p>\n        	<p [class]="b.Especialidade ? \'\' : \'esconde\'"><strong>Especialidade:</strong> {{b.Especialidade}}</p>\n          <p [class]="b.Latitude ? \'exibe\' : \'esconde\'" (click)="detalhePost(b.id)" color="danger">Ver no mapa</p>\n      	</ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   		<ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n 	  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\profissional\profissional.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfissionalPage);
    return ProfissionalPage;
}());

//# sourceMappingURL=profissional.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomelogadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhe_detalhe__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profissional_profissional__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomelogadoPage = /** @class */ (function () {
    function HomelogadoPage(navCtrl, navParams, blogProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.storage = storage;
        this.sessao = {};
        this.storage.get('usuario').then(function (name) {
            if (name) {
                _this.sessao.nomeUsuario = name;
            }
        });
    }
    HomelogadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomelogadoPage');
    };
    HomelogadoPage.prototype.efetuarLogout = function () {
        // Limpa a sessão
        this.storage.clear().then(function () {
            console.log('all keys cleared');
            // Ajusta o menu
            document.getElementById("restrita").style.display = "none";
            document.getElementById("meus-dados").style.display = "none";
            document.getElementById("cad-profi").style.display = "none";
            document.getElementById("cadastro").style.display = "block";
            document.getElementById("login").style.display = "block";
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    HomelogadoPage.prototype.detalhePost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    HomelogadoPage.prototype.encontreProfissional = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profissional_profissional__["a" /* ProfissionalPage */]);
    };
    HomelogadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homelogado',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\homelogado\homelogado.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Área Restrita</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p class="nome">Olá, <b>{{sessao.nomeUsuario}}</b></p>\n    <p class="sair" (click)="efetuarLogout()">SAIR</p>\n\n    <div class="space"></div>\n\n    <ion-card (click)="detalhePost(309)">\n        <img src="assets/imgs/destaque-cimento.jpg" />\n        <ion-card-content>\n        	<ion-card-title>Como é produzido o cimento?</ion-card-title>\n        	<p>Assista ao vídeo e descubra.</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="encontreProfissional()">\n        <img src="assets/imgs/destaque-profissional.jpg" />\n        <ion-card-content>\n        	<ion-card-title>Encontre um profissional</ion-card-title>\n        	<p>Facilitamos sua busca: encontre aqui um especialista próximo de você.</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="detalhePost(318)">\n        <img src="assets/imgs/destaque-alvenaria.jpg" />\n        <ion-card-content>\n        	<ion-card-title>Alvenaria</ion-card-title>\n        	<p>Assista ao vídeo e confira como deixar sua alvenaria perfeita.</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\homelogado\homelogado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomelogadoPage);
    return HomelogadoPage;
}());

//# sourceMappingURL=homelogado.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localizacaobusca_localizacaobusca__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LocationAccuracy } from '@ionic-native/location-accuracy';


var LocalizacaoPage = /** @class */ (function () {
    function LocalizacaoPage(navCtrl, navParams, blogProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.coords = {};
        this.teste = {};
        if (navParams.get("raio")) {
            this.coords.cep = navParams.get("cep");
            this.coords.raio = navParams.get("raio");
            this.procuraEndereco(this.coords.cep, this.coords.raio);
        }
        else {
            this.coords.raio = 2;
            this.initializeMap();
        }
    }
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
    };
    LocalizacaoPage.prototype.initializeMap = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        var locationOptions = { timeout: 2000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.coords.latitude = position.coords.latitude;
            _this.coords.longitude = position.coords.longitude;
            _this.criaMapa(_this.coords.latitude, _this.coords.longitude, _this.coords.raio, '', '');
            // Esconde o carregamento
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            _this.toastCtrl.create({
                //message: 'Erro: ' + error,
                message: 'Não foi possível exibir o mapa, ative sua localização e tente novamente.',
                //duration: 5000,
                dismissOnPageChange: true,
            }).present();
        }, locationOptions);
    };
    LocalizacaoPage.prototype.procuraEndereco = function (cep, raio) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        var latitude;
        var longitude;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': cep
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var geocod = results[0].geometry.location + '';
                var location = geocod.split(", ");
                latitude = location[0].replace('(', '');
                longitude = location[1].replace(')', '');
            }
        });
        // Aguarda 1 segundo para os valores serem contabilizados pela função Geocoder
        var hideFooterTimeout = setTimeout(function () {
            // Verifica se os dados foram encontrados
            if (latitude) {
                _this.criaMapa(latitude, longitude, _this.coords.raio, '', '');
                // Esconde o carregamento
                loading.dismiss();
            }
            else {
                // Esconde o carregamento
                loading.dismiss();
                // Exibe a mensagem
                _this.toastCtrl.create({
                    message: 'O cep informado não foi encontrado, tente novamente.',
                    duration: 5000,
                    dismissOnPageChange: true,
                }).present();
            }
        }, 1000);
    };
    // Adiciona os pontos no mapa junto da API das lojas
    LocalizacaoPage.prototype.criaMapa = function (latitude, longitude, raio, zoom, mensagem) {
        var _this = this;
        mensagem = 'Não foi encontrado nenhuma loja. Ajuste sua pesquisa e tente novamente.';
        if (raio == 1) {
            zoom = 15;
        }
        else if (raio == 2) {
            zoom = 13;
        }
        else if (raio == 3) {
            zoom = 13;
        }
        else if (raio == 4) {
            zoom = 12;
        }
        else if (raio == 5) {
            zoom = 12;
        }
        else if (raio == 6) {
            zoom = 12;
        }
        else if (raio == 7) {
            zoom = 11;
        }
        else if (raio == 8) {
            zoom = 11;
        }
        else if (raio == 9) {
            zoom = 11;
        }
        else if (raio == 10) {
            zoom = 11;
        }
        // esta variável vai definir a área de mapa a abranger e o nível do zoom
        // de acordo com as posições dos marcadores
        //var bounds = new google.maps.LatLngBounds();
        var options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
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
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent('<div id="iw_container"><div class="iw_title">Sua localização</div></div>');
                infowindow.open(this.map, marker);
            };
        })(marker, i));
        var hideFooterTimeout = setTimeout(function () {
            //this.map.setVisible(true);
            // Os valores de latitude e longitude do marcador são adicionados à variável bounds
            //bounds.extend(this.coords.latitude, this.coords.longitude);
            // Retorna os estabelecimentos
            _this.blogProvider.listaEstabLocalizacao(latitude, longitude, raio).subscribe(function (blog) {
                if (blog.Registros) {
                    if (blog.Registros == 1) {
                        mensagem = 'Foi encontrada ' + blog.Registros + ' loja Intercement.';
                    }
                    else {
                        mensagem = 'Foram encontradas ' + blog.Registros + ' lojas Intercement.';
                    }
                    _this.blog = blog.Data;
                    Object.keys(_this.blog).forEach(function (key) {
                        if (_this.blog[key].Latitude != '' && _this.blog[key].Longitude != '') {
                            i++;
                            var iwContent = '' +
                                '<div id="iw_container">' +
                                '<div class="iw_title"><strong>' + _this.blog[key].RazaoSocial + '</strong></div>' +
                                '<div class="iw_content">' +
                                _this.blog[key].EnderecoDoBanco + '<br />' +
                                '<a href="tel:' + _this.blog[key].Telefone1 + '" target="_blank" class="telefone">' + _this.blog[key].Telefone1 + '</span><br />' +
                                '<a href="mailto:' + _this.blog[key].Email + '" target="_blank" class="site">' + _this.blog[key].Email + '</a>' +
                                '</div>' +
                                '</div>';
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(_this.blog[key].Latitude, _this.blog[key].Longitude),
                                map: _this.map,
                                icon: 'assets/imgs/marcador2.png',
                            });
                            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                    infowindow.setContent(iwContent);
                                    infowindow.open(this.map, marker);
                                };
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
                _this.toastCtrl.create({
                    message: mensagem,
                    duration: 5000,
                    dismissOnPageChange: true,
                }).present();
            });
        }, 500);
    };
    LocalizacaoPage.prototype.pesquisaLoja = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__localizacaobusca_localizacaobusca__["a" /* LocalizacaobuscaPage */], {
            latitude: this.coords.latitude,
            longitude: this.coords.longitude,
            cep: this.coords.cep,
            raio: this.coords.raio,
        });
    };
    LocalizacaoPage.prototype.testeModal = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"custom-spinner-container\">\n            <br>\n            <p>par\u00E1grafo de teste um.... <a href=\"#\">Link de teste</a></p>\n            <p>O Amigo Construtor \u00E9 um projeto de comunica\u00E7\u00E3o e de relacionamento da InterCement, fabricante dos cimentos Cau\u00EA, Cimpor, Zebu e Goi\u00E1s, para se aproximar cada vez mais dos profissionais que trabalham na Constru\u00E7\u00E3o Civil.</p>\n            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da constru\u00E7\u00E3o, al\u00E9m de dicas, conversas com especialistas, v\u00EDdeos, teste de conhecimentos e muito mais.</p>\n            <p>Ent\u00E3o, fique \u00E0 vontade para participar e compartilhar suas experi\u00EAncias com a gente.</p>\n            <p>Ser\u00E1 um prazer ter voc\u00EA por aqui acompanhando nossas novidades!</p>\n\n            <p>O Amigo Construtor \u00E9 um projeto de comunica\u00E7\u00E3o e de relacionamento da InterCement, fabricante dos cimentos Cau\u00EA, Cimpor, Zebu e Goi\u00E1s, para se aproximar cada vez mais dos profissionais que trabalham na Constru\u00E7\u00E3o Civil.</p>\n            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da constru\u00E7\u00E3o, al\u00E9m de dicas, conversas com especialistas, v\u00EDdeos, teste de conhecimentos e muito mais.</p>\n            <p>Ent\u00E3o, fique \u00E0 vontade para participar e compartilhar suas experi\u00EAncias com a gente.</p>\n            <p>Ser\u00E1 um prazer ter voc\u00EA por aqui acompanhando nossas novidades!</p>\n\n            <p>O Amigo Construtor \u00E9 um projeto de comunica\u00E7\u00E3o e de relacionamento da InterCement, fabricante dos cimentos Cau\u00EA, Cimpor, Zebu e Goi\u00E1s, para se aproximar cada vez mais dos profissionais que trabalham na Constru\u00E7\u00E3o Civil.</p>\n            <p>Neste nosso novo canal, queremos deixar nossos Amigos por dentro de todos os temas voltados para o universo da constru\u00E7\u00E3o, al\u00E9m de dicas, conversas com especialistas, v\u00EDdeos, teste de conhecimentos e muito mais.</p>\n            <p>Ent\u00E3o, fique \u00E0 vontade para participar e compartilhar suas experi\u00EAncias com a gente.</p>\n            <p>Ser\u00E1 um prazer ter voc\u00EA por aqui acompanhando nossas novidades!</p>\n            <div class=\"space\"></div>\n          </div>",
            duration: 10000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    LocalizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-localizacao',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\localizacao\localizacao.html"*/'<ion-header>\n  	<ion-navbar hideBackButton>\n    	<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>Lojas perto de você</ion-title>\n\n    	<!--<ion-buttons end id="buttonModal">\n	        <button ion-button icon-only (click)="testeModal()">\n	          <ion-icon name="ios-book" color="primary"></ion-icon>\n	        </button>\n		</ion-buttons>-->\n\n		<ion-buttons end>\n	        <button ion-button icon-only (click)="pesquisaLoja()">\n	          <ion-icon name="ios-pin" color="primary"></ion-icon>\n	        </button>\n		</ion-buttons>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div id="map_canvas"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\localizacao\localizacao.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, blogProvider, geo, loadingCtrl, alertCtrl, toastCtrl, network, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.geo = geo;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.http = http;
        this.blog = [];
        this.itensPorPagina = 10;
        this.paginaAtual = 1;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.listaBlog();
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        }).catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.listaBlog = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.blogProvider.listaBlog(this.itensPorPagina, this.paginaAtual).subscribe(function (blog) {
            loading.dismiss();
            if (blog.Registro) {
                _this.blog = blog.Data;
            }
            /*this.toastCtrl.create({
              //message: `Você está conectado com a internet.You are now ${this.connectionState} via ${networkType}`,
              message: `Você está conectado com a internet.`,
              duration: 5000,
              dismissOnPageChange: true,
            }).present();*/
        });
    };
    HomePage.prototype.detalhePost = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhe_detalhe__["a" /* DetalhePage */], {
            id: id
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.paginaAtual++;
        setTimeout(function () {
            _this.blogProvider.listaBlog(_this.itensPorPagina, _this.paginaAtual).subscribe(function (blog) {
                infiniteScroll.complete();
                if (blog.Registro) {
                    _this.blog = _this.blog.concat(blog.Data);
                }
            });
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card (click)="detalhePost(b.id)" *ngFor="let b of blog">\n        <img src="{{b.image}}"/>\n  \n        <ion-card-content>\n          <p class="fData">{{b.date}}</p>\n          <ion-card-title>{{b.title}}</ion-card-title>\n          <!--<p *ngIf="b.id_cat == 5" class="fCat">{{b.category}}</p>-->\n          <p class="fCat cat{{b.id_cat}}">{{b.category}}</p>\n          <p>{{b.excerpt}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando mais informações..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n<!--<ion-footer>\n  <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)" placeholder="Pesquisar...">\n  </ion-searchbar>\n</ion-footer>-->'/*ion-inline-end:"C:\Users\bruno\mobile\ionic\AmigoConstrutor\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_blog__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map