import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailApi {
    
    emailApiUrl = 'http://localhost:8080/nc_backend/emailapi/validate/';

    constructor(public http: Http) {

    }

    load(email: string): Observable<string> {
        
        return this.http.get(`${this.emailApiUrl}${email}`)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError (error: Response | any) {
        console.log('error message');
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        
        return Observable.throw(errMsg);
    }
}
