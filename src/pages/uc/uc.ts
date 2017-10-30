import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApadrinhamentoProvider } from '../../providers/apadrinhamento/apadrinhamento';

/**
 * Generated class for the UcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uc',
  templateUrl: 'uc.html',
})
export class UcPage {

  public ucs:any[];
  
    constructor(
      public navCtrl: NavController,
      public service: ApadrinhamentoProvider
    ) {
      this.getDatauc();
    }
  
  getDatauc(){
      this.service.getDatauc().subscribe(
      data=>this.ucs=data,
      err=>console.log(err)
    )
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getDatauc();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
  
  
  }
