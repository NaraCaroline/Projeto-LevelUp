import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
