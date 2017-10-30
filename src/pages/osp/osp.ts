import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApadrinhamentoProvider } from '../../providers/apadrinhamento/apadrinhamento';

/**
 * Generated class for the OspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-osp',
  templateUrl: 'osp.html',
})
export class OspPage {

  public osps:any[];
  
    constructor(
      public navCtrl: NavController,
      public service: ApadrinhamentoProvider
    ) {
      this.getDataosp();
    }
  
  getDataosp(){
      this.service.getDataosp().subscribe(
      data=>this.osps=data,
      err=>console.log(err)
    )
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getDataosp();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
  
  }
