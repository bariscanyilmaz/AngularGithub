import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReposComponent } from './repos.component';
import { DataService } from './Service/DataService';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpModule],
  declarations: [AppComponent, ReposComponent ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule { }
