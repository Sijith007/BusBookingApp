import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonService } from './shared/service/common.service';
import { routes } from './routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BusService } from './shared/service/bus.service';
import { GstPipe } from './shared/pipe/gst.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './shared/services/ajax.service';
import { ObservableComponent } from './observable/observable.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    PaymentComponent,
    BookSeatComponent,
    HeaderComponent,
    FooterComponent,
    GstPipe,
    GetComponent,
    PostComponent,
    ObservableComponent,
    AlertComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    NgProgressModule,
    HttpClientModule
  ],
  providers: [CommonService, LoginService,AuthGuardService, BusService, AjaxService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
