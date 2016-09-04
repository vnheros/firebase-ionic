import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

declare var firebase: any;

@Injectable()
export class FbAuth {

    constructor(private http: Http) {
        
    }

    startOAuthFlow() {
        window.addEventListener('message', (event) => {
            this.onPostMessage(event);
        });
        this.createWindow("http://localhost:8100/oauthcallback.html");
    }

    createWindow(url: string, name: string = 'Window', width: number = 500, height: number = 600, left: number = 0, top: number = 0) {
        if (url == null) {
            return null;
        }

        var options = `width=${width},height=${height},left=${left},top=${top}`;

        return window.open(url, name, options);
    }

    onPostMessage(event) {
        //console.log(event);
        if (event.data.status === "200") {
            // Use an EventEmitter to notify the other components that user logged in
            console.log(event.data.jwt);
        }
    }

}

