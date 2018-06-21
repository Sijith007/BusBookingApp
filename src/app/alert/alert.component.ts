import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  errormsg;

  constructor(private alertservice: AlertService) { }

  ngOnInit() {
    this.alertservice.getAlert().subscribe(res=>{
      this.errormsg = res;

      setTimeout(() => {
        this.errormsg = ""
      }, 2000);
    });
  }

}
