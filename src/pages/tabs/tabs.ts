import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { UcPage } from '../uc/uc';
import { OspPage } from '../osp/osp';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab5Root = UcPage;
  tab6Root = OspPage;

  constructor() {

  }
}
