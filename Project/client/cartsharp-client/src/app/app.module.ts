import { UnauthorizedInterceptor } from './../utilities/interceptors/unauthorized.interceptor';
import { TokenInterceptor } from '../utilities/interceptors/token.interceptor';
import { TokenHelper } from './../utilities/helpers/tokenHelper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NavbarComponent,
        FooterComponent,
        FontAwesomeModule,
        HttpClientModule,
    ],
    providers: [
        TokenHelper,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true}
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
