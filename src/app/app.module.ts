import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_directives';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService } from './_services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],

  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule,
  ],

  providers: [
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
