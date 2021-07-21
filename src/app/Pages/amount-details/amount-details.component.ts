import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-amount-details',
  templateUrl: './amount-details.component.html',
  styleUrls: ['./amount-details.component.css']
})
export class AmountDetailsComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { }
  _id: any;
  allAmountList: any = [];
  detailOFAmount: any = [];

  ngOnInit(): void {
    // debugger;
    this._id = this.route.snapshot.paramMap.get('id')

    let headerOpions = this.api.commonHeaders("token");
    this.api
      .doGET(this.api.rootUrl + this.api.allAmounts, headerOpions)
      .subscribe(
        (result: any) => {
          this.allAmountList = result;
          
          this.detailOFAmount = this.allAmountList.find(x => x._id == this._id);
          console.log("Amounts:", this.detailOFAmount);
        },
        (error: any) => {
          console.log("Errorrrr", error);
        });

  }
  goBack() {
    this.router.navigateByUrl('amount-list');
  }
}
