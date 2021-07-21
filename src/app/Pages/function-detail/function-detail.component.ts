import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-function-detail',
  templateUrl: './function-detail.component.html',
  styleUrls: ['./function-detail.component.css']
})

export class FunctionDetailComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) {

  }

  // eventData: Array<string>;
  eventData: any = [];
  specificEventData: any = [];

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.eventData = new Array<string>();
    } else {
      this.eventData = JSON.parse(myArray)
    }

    console.log('r_data:', this.eventData);

// ----------------------------------------

    const fDetail = this.route.snapshot.queryParamMap.get('fDetail');
    if (fDetail === null) {
      this.specificEventData = new Array<string>();
    } else {
      this.specificEventData = JSON.parse(fDetail)
    }
    console.log('specificEventData:', this.specificEventData);

  }

  gotoBack() {
    this.router.navigateByUrl('function-list');
  }
}
