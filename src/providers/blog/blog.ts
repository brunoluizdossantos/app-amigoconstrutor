//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogProvider {

    private dominio   = 'http://amigoconstrutor.clientesdream.com.br';
    private apiBlog   = `${this.dominio}/wp-content/themes/amigo-construtor/mobile/api-posts-home.php`;
    private apiPortal = `${this.dominio}/portal/servicos/`;
  
    constructor(public http: Http) {
    }

    listaBlog(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogAmigoEnsina(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}&cat=5`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogComoSeFaz(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}&cat=7`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogMercado(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}&cat=8`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogRedeAmigo(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}&cat=6`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogVideo(itensPorPagina, paginaAtual)
    {
      return this.http.get(`${this.apiBlog}?itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}&cat=39`)
      .map((data) => {
        return data.json();
      });
    }

    listaBlogPost(id)
    {
      return this.http.get(`${this.apiBlog}?id=${id}`)
      .map((data) => {
        return data.json();
      });
    }

    listaEncProfissional(idEstado = 0, idCidade = 0, idEspecialidade = 0, itensPorPagina = 10, paginaAtual = 1)
    {
      return this.http.get(`${this.apiPortal}ObterUsuariosFiltroEncontreProfissionalPaginada?CodigoEstado=${idEstado}&CodigoCidade=${idCidade}&CodigoEspecialidade=${idEspecialidade}&itensPorPagina=${itensPorPagina}&paginaAtual=${paginaAtual}`)
      .map((data) => {
        return data.json();
      });
    }
    
    listaEncProfissionalId(id)
    {
      return this.http.get(`${this.apiPortal}ObterUsuarioPorId?id=${id}`)
      .map((data) => {
        return data.json();
      });
    }

    listaEstadosFiltroEncontreProfissional()
    {
      return this.http.get(`${this.apiPortal}ObterEstadosFiltroEncontreProfissional?CodigoEstado=0&CodigoCidade=0&CodigoEspecialidade=0`)
      .map((data) => {
        return data.json();
      });
    }

    listaCidadesPorEstadoFiltroEncontreProfissional(idEstado)
    {
      return this.http.get(`${this.apiPortal}ObterCidadesPorEstadoFiltroEncontreProfissional?CodigoEstado=${idEstado}&CodigoCidade=0&CodigoEspecialidade=0`)
      .map((data) => {
        return data.json();
      });
    }

    listaEspecialidadesPorCidadeFiltroEncontreProfissional(idEstado, idCidade)
    {
      return this.http.get(`${this.apiPortal}ObterEspecialidadesPorCidadeFiltroEncontreProfissional?CodigoEstado=${idEstado}&CodigoCidade=${idCidade}&CodigoEspecialidade=0`)
      .map((data) => {
        return data.json();
      });
    }

    login(username, password)
    {
      return this.http.get(`${this.apiPortal}ValidarLogin2?cpf=${username}&senha=${password}`)
      .map((data) => {
        return data.json();
      });
    }

    recuperaSenha(email)
    {
      return this.http.get(`${this.apiPortal}RecuperarSenha?email=${email}`)
      .map((data) => {
        return data.json();
      });
    }

    listaEstabLocalizacao(latitude, longitude, raio)
    {
      return this.http.get(`${this.apiPortal}ObterTodasRevendas2?latitude=${latitude}&longitude=${longitude}&raio=${raio}`)
      .map((data) => {
        return data.json();
      });
    }

    validaPreCadastro(email, cpf)
    {
      return this.http.get(`${this.apiPortal}VerificarExistenciaCPFEmail?email=${email}&cpf=${cpf}`)
      .map((data) => {
        return data.json();
      });
    }

    listaProfissao()
    {
      return this.http.get(`${this.apiPortal}ObterProfissoes2`)
      .map((data) => {
        return data.json();
      });
    }

    listaEstado()
    {
      return this.http.get(`${this.apiPortal}ObterEstados2`)
      .map((data) => {
        return data.json();
      });
    }

    listaCidadesPorEstado(idEstado)
    {
      return this.http.get(`${this.apiPortal}ObterCidadesPorEstado2?codigoEstado=${idEstado}`)
      .map((data) => {
        return data.json();
      });
    } 

    cadastroApp(latitude, longitude, raio)
    {
      return this.http.get(`${this.apiPortal}ObterTodasRevendas2?latitude=${latitude}&longitude=${longitude}&raio=${raio}`)
      .map((data) => {
        return data.json();
      });
    }

    cadastroFacebook(latitude, longitude, raio)
    {
      return this.http.get(`${this.apiPortal}ObterTodasRevendas2?latitude=${latitude}&longitude=${longitude}&raio=${raio}`)
      .map((data) => {
        return data.json();
      });
    }

}