import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  data:Observable<string>
  fruitArray = [];

  constructor(public alertService:AlertService) { }

  ngOnInit() {
    this.data= new Observable(obser=>{

      setTimeout(() => {
        obser.next("apple")
        obser.unsubscribe();
      }, 1000);

      
      setTimeout(() => {
        obser.next("orange")
        obser.unsubscribe();
      }, 2000);

    })

    this.data.subscribe(fruit => {

      this.fruitArray.push(fruit);

    })

  }

  setData(){
    this.alertService.setAlert("Inserted Successfully!");
  }

}
