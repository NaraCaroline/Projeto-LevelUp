import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, ROUTES } from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
