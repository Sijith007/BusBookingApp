import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../shared/service/bus.service';
import { LoginService } from '../login/login.service';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bus: any = {};
  loggedUser;
  bookedAmount = 0;
  selectedSeats = [];

  constructor(private activatedRoute: ActivatedRoute, private busService: BusService, private loginService: LoginService,
    private _router: Router, private ngProgress: NgProgress) { }

  ngOnInit() {
    this.bus = this.busService.getBus();
    this.bus = this.bus ? this.bus : {};
    this.loggedUser = this.loginService.getLoggedUser(); debugger;
    this.getBookedAmount();
    this.selectedSeats = this.busService.getSeats();
  }

  getBookedAmount() {
    this.bookedAmount = this.busService.getSeats().length * this.bus.amount;
  }

  bookSeat() {
    this.ngProgress.start();
    let count = 0;
    for (let index = 0; index < this.bus['seates'].length; index++) {
      for (let selectedSeatIndex = 0; selectedSeatIndex < this.selectedSeats.length; selectedSeatIndex++) {
        if (this.bus['seates'][index].id == this.selectedSeats[selectedSeatIndex].id) {
          this.bus['seates'][index].userId = this.loggedUser.id;
          count++;
        }
      }
    }
    setTimeout(function () {
      this.ngProgress.done();
      alert(count + " Seats Booked Successfully");
      this._router.navigate(['search']);
    }.bind(this), 3000);
  }
}
