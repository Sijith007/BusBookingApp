import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/observable/forkJoin';

@Injectable()
export class BusService {

  selectedBus;
  selectedSeats = [];

  constructor(private http: HttpClient) { }

  routes;
  buses;

  getBuses() {
    if(this.buses) {
      return this.buses;
    }
    return this.http.get('http://localhost:8081/buses').subscribe(res=> {
      this.buses = res;
      return res;
    });
  }

  getRoutes() {
    if(this.routes) {
      return this.routes;
    }
    return this.http.get('http://localhost:8081/routes').subscribe(res=> {
      this.routes = res;
      return res;
    })
  }

  // getBuses(fromPlace, toPlace, date) {
    // this.http.get('http://localhost:8081/buses').subscribe(resp=>{
    //   this.buses = resp;
    // });

    // this.http.get('http://localhost:8081/routes').subscribe(resp=>{
    //   this.routes = resp;
    // });

  //   return Observable.forkJoin([
  //     this.http.get('http://localhost:8081/buses'), 
  //     this.http.get('http://localhost:8081/routes')
  //   ]).subscribe(responses => {
  //       this.buses = responses[0];
  //       this.routes = responses[1];
  //       const searchedRoutes = this.routes.find(route => (route.from == fromPlace && route.to == toPlace && route.date == date));
  //       const searchedBuses = this.buses.filter(bus => (
  //         bus.rId == searchedRoutes.id
  //       ));
  //       return searchedBuses;
  //    });
  // }

  setBus(bus) {
    this.selectedBus = bus;
  }

  getBus() {
    return this.selectedBus;
  }

  setSeats(selectedSeats) {
    this.selectedSeats = selectedSeats;
  }

  getSeats() {
    return this.selectedSeats;
  }

}
