import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApadrinhamentoProvider } from '../../providers/apadrinhamento/apadrinhamento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  
  public apadrinhamentos:any;

  constructor(
    public navCtrl: NavController,
    public service: ApadrinhamentoProvider
  ) {
    this.getData();
  }

getData(){
    this.service.getData().subscribe(
    data=>this.apadrinhamentos=data,
    err=>console.log(err)
  )
}

doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.getData();
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}

}
