import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  title2;
  @Input() title;
  
  constructor() {
    console.log("Constructor invoked child");
  }

  ngOnInit() {
    console.log("ngOnInit invoked child");
  }

  ngOnChanges() {
    this.title2 = this.title + "hi";
    console.log("ngOnChanges invoked child");
  }
   
  ngAfterContentInit(){
    console.log("ngAfterContentInit invoked child");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy invoked child");    
  }
 
}
