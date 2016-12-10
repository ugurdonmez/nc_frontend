import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmailApi } from '../../providers/email-api'


@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})

export class LoginPage {

   constructor(public navCtrl: NavController, private emailApi: EmailApi) {}

   ionViewDidLoad() {
      console.log('Hello LoginPage Page');
   }

   updateEmailAddress(ev) {
       this.emailApi.load(ev.target.value).subscribe(data => {
          console.log(data)
        });
   }
}
