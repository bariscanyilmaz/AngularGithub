import { Component } from '@angular/core';
import { DataService } from './Service/DataService';
import { ReposComponent } from './repos.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
    name = 'Angular';
    User: any | null | undefined;
    Repos: any;

    constructor(private service: DataService) {
        this.userName = "";
    }

    private _userName: string;
    public get userName(): string {
        return this._userName;
    }

    public set userName(val: string) {
        this._userName = val;
    }

    public getUserDetail() {
        this.service.getUserDetail(this.userName)
            .subscribe(result => this.User = result,
            error => console.log(error),
            () => {
                this.service.getUserRepos(this.User.repos_url)
                    .subscribe(response => this.Repos = response,
                    err => console.log(err),
                    ()=> console.log("All Repos Loaded")
                )
            }
        );
    }


    public alertMessage($event:any) {
        alert("[" + this.User.bio + "]:" + $event);
    }
}
