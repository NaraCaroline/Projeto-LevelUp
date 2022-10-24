import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, BrowserModule, RouterModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
