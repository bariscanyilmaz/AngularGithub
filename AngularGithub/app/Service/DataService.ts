import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const url: string = "https://api.github.com/users/";
@Injectable()
export class DataService {
    constructor(private http: Http) {

    }

    public getUserDetail(name: string) {
        return this.http.get(url + name)
            .map(result => result.json());
    }

    public getUserRepos(url: string) {
        return this.http.get(url)
            .map(response => response.json());
    }

}
