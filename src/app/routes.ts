import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'get', component: GetComponent },
    { path: 'post', component: PostComponent },
    { path: 'search', component: SearchComponent },
    { path: 'book-seat', component: BookSeatComponent },
    { path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService] },
];