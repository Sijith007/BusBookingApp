import { Component, OnInit } from '@angular/core';
import { BusService } from '../shared/service/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {

  buses;
  loggedUser;
  selectedSeats = [];
  cancellingSeats = [];

  constructor(private busService: BusService, private loginService: LoginService, private activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.loggedUser = this.loginService.getLoggedUser();
    this.loggedUser = this.loggedUser ? this.loggedUser : {};
    const date = this.activatedRoute.snapshot.params['date'];
    const toPlace = this.activatedRoute.snapshot.params['toPlace'];
    const fromPlace = this.activatedRoute.snapshot.params['fromPlace'];

    Observable.forkJoin([
      this.busService.getBuses(), 
      this.busService.getRoutes()
    ]).subscribe(responses => {
        this.buses = responses[0];
        const routes:any = responses[1];
        const searchedRoutes = routes.find(route => (route.from == fromPlace && route.to == toPlace && route.date == date));
        this.buses = this.buses.filter(bus => (
          bus.rId == searchedRoutes.id
        ));
        this.getCancellingSeats();
     });
  }

  getCancellingSeats() {
    for(let busIndex=0; busIndex < this.buses.length; busIndex++) {
      this.buses[busIndex]['alreadySelectedSeats'] = [];
      for (let index=0; index < this.buses[busIndex]['seates'].length;index++ ) {
        if(this.buses[busIndex]['seates'][index].userId == this.loggedUser.id) {
          this.buses[busIndex]['alreadySelectedSeats'].push(Object.assign({}, this.buses[busIndex]['seates'][index]));
        }
      }  
    }
  };

  selectSeat(seat) {
    debugger;
    // seat.userId = 0 == seat.userId ? this.loggedUser.id : 0;
    if(!seat.isSelected) {
      seat.isSelected = !seat.isSelected;
      this.selectedSeats.push(seat);
    } else {
      const index = this.selectedSeats.indexOf(seat);
      seat.isSelected = !seat.isSelected;
      this.selectedSeats.splice(index, 1);
    }
  }

  selectSeatForCancel(seat) {
    if(!seat.isCaneclSelect) {
      seat.isCaneclSelect = !seat.isCaneclSelect;
      this.cancellingSeats.push(seat);
    } else {
      const index = this.cancellingSeats.indexOf(seat);
      seat.isCaneclSelect = !seat.isCaneclSelect;
      this.cancellingSeats.splice(index, 1);
    }
  }

  cancelSeats(bus) {
    let count = 0;
    for (let index=0; index < bus['seates'].length;index++ ) {
      for (let selectedSeatIndex=0; selectedSeatIndex < this.cancellingSeats.length; selectedSeatIndex++ ) {
        if(bus['seates'][index].id ==  this.cancellingSeats[selectedSeatIndex].id) {
          bus['seates'][index].userId = 0;
          bus['seates'][index].isSelected = false;
          count++;
        }
      }
    }
    alert(count + " Seats Cancelled Successfully");
    this._router.navigate(['search']);
  }

  bookSeats(bus) {
    if(this.loggedUser) {
      this.busService.setBus(bus);debugger;
      this.busService.setSeats(this.selectedSeats);debugger;
      this._router.navigate(['payment']);
    }else {
      this._router.navigate(['']);
    }
  }

}
