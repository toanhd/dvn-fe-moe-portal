import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {catchError, map, filter, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    url = 'http://localhost:3000/';

    constructor(
        private http: Http
    ) {
    }

    createRequest(request) {
        const body = JSON.stringify(request);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.url + 'request', body, {headers: headers})
            .pipe(map((response: Response) => {
                    return {
                        response: response.json(),
                        code: response.status
                    }
                }), catchError((error: Response) => Observable.throw(error.json()))
            )
    }

    logIn(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.url + 'authentication/login', body, {headers: headers})
            .map((response: Response) => {
                return {
                    response: response.json(),
                    code: response.status
                }
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public isAuthenticated(): boolean {
        const jwtHelper: JwtHelperService = new JwtHelperService();
        const token = localStorage.getItem('token');
        return !jwtHelper.isTokenExpired(token);
    }
}
