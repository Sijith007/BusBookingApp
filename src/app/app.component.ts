import { Component, OnInit,AfterContentInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  title = 'app';
  constructor() {
    console.log("Constructor invoked parent");
    setTimeout(() => {
      this.title = "welcome"
    }, 2000);
  }

  ngOnInit() {
    console.log("ngOnInit invoked parent");
  }

  ngOnChanges() {
    console.log("ngOnChanges invoked  parent");
  }

  ngDoCheck() {
    console.log("ngDoCheck parent");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy invoked parent");    
  }
 
}
