import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the ApadrinhamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApadrinhamentoProvider {

  api:any="http://186.215.97.33/APIs/";

  constructor(public http: Http) {
    console.log('Hello ApadrinhamentoProvider Provider');
  }

  getData(){
    return this.http.get(this.api+"apiRecupera.php").map(res=>res.json())
  }

  getDatauc(){
    return this.http.get(this.api+"apiRecuperauc.php").map(res=>res.json())
  }

  getDataosp(){
    return this.http.get(this.api+"apiRecuperaosp.php").map(res=>res.json())
  }

}
