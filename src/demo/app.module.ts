import { NgXRayModule } from '../lib';
import { AppComponent } from './app.component';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgXRayModule,
  ],
})
export class AppModule {
}
