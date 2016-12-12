import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmailApi } from '../../providers/email-api'

import { Validation } from '../../models/validation';
import { Suggestion } from '../../models/suggestion';


@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})

export class LoginPage {
    
    a: number;
    disableButton: boolean;
    
    validation: Validation;
    suggestion: Suggestion;
    
    constructor(public navCtrl: NavController, private emailApi: EmailApi) {
        this.a = 10;
        this.disableButton = true;
    }

    ionViewDidLoad() {
        console.log('Hello LoginPage Page');
    }

    updateEmailAddress(ev) {
        this.emailApi.load(ev.target.value).subscribe(data => {
            this.validation = data.emailValidationResult;
            this.suggestion = data.emailSuggestionResult;    
            this.disableButton = !this.validation.isSyntaxCorrect;
            console.log(this.suggestion);
        });
    }
    
    clicked(ev) {
        console.log('clicked');
    }
}
