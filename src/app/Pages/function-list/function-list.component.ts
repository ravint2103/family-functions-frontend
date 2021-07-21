import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
declare var $: any;


@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css']
})
export class FunctionListComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, public fb: FormBuilder) { }
  submitted = false;
  allEventList: any = [];
  eventData: any = [];
  allAmountList: any = [];
  // eventsDetail: any = [];
  EvType: any;

  addFunctionForm = this.fb.group({
    adFuncName: ['', [Validators.required]],
    adFuncPlace: ['', [Validators.required]]
  })

  ngOnInit(): void {
    this.GetAllFuncs();
  }
  // GetAllData() {
  //   let headerOpions = this.api.commonHeaders("token");
  //   this.api
  //     .doGET(this.api.rootUrl + this.api.allAmounts, headerOpions)
  //     .subscribe(
  //       (result: any) => {
  //         this.allAmountList = result;
  //         console.log("All_Amounts:", this.allAmountList);
  //       },
  //       (error: any) => {
  //         console.log("Errorrrr", error);
  //       });
  // }
  GetAllFuncs() {
    let headerOpions = this.api.commonHeaders("token");
    this.api
      .doGET(this.api.rootUrl + this.api.allEvents, headerOpions)
      .subscribe(
        (result: any) => {
          this.allEventList = result;
          // console.log("Amounts:", this.allEventList);
        },
        (error: any) => {
          console.log("Errorrrr", error);
        });

  }
  changeEvVal(value) {
    this.EvType = value;
  }

  viewList(place: any) {
    // debugger;
    // this.router.navigate(['function-detail', place]);

    let headerOpions = this.api.commonHeaders("token");
    this.api
      .doGET(this.api.rootUrl + this.api.allAmounts, headerOpions)
      .subscribe(
        (result: any) => {
          this.allAmountList = result;
          this.eventData = this.allAmountList.filter(x => x.Address == place);
          console.log('Filtered Address:', this.eventData);
          const queryParams: any = {};
          queryParams.myArray = JSON.stringify(this.eventData);
          this.router.navigate(['/function-detail'], { queryParams });

        },
        (error: any) => {
          console.log("Errorrrr", error);
        });
  }

  viewAllFunc(fname: any) {
    // this.router.navigate(['function-detail', fname]);
    // debugger;
    let headerOpions = this.api.commonHeaders("token");
    this.api
      .doGET(this.api.rootUrl + this.api.allAmounts, headerOpions)
      .subscribe(
        (result: any) => {
          this.allAmountList = result;
          this.eventData = this.allAmountList.filter(x => x.FunctionName == fname);
          console.log('Filtered Name:', this.eventData);
          const queryParams: any = {};
          queryParams.myArray = JSON.stringify(this.eventData);
          this.router.navigate(['/function-detail'], { queryParams });
        },
        (error: any) => {
          console.log("Errorrrr", error);
        });
  }
  viewFunc(data: any) {
    // console.log(data);
    const queryParams: any = {};
    queryParams.fDetail = JSON.stringify(data);
    this.router.navigate(['/function-detail'], { queryParams });
  }

  onSubmit() {
    this.submitted = true;
    debugger;
    if (!this.addFunctionForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      // return false;
    } else {
      console.log(this.addFunctionForm.value)
    }

    let postData = {
      "FunctionName": this.addFunctionForm.value.adFuncName ? this.addFunctionForm.value.adFuncName : "-",
      "FunctionAddress": this.addFunctionForm.value.adFuncPlace ? this.addFunctionForm.value.adFuncPlace : '-',
      "Status": this.EvType ? this.EvType : '0'
    }

    let headerOpions = this.api.commonHeaders("");
    this.api
      .doPOST(this.api.rootUrl + this.api.allEvents, postData, headerOpions)
      .subscribe(
        (result: any) => {
          this.allAmountList = result;
          // console.log("Amounts:", this.allAmountList);
          $('#addAmountModal').modal('hide');

        },
        (error: any) => {
          console.log("Errorrrr", error);
          alert(error);
          $('#addAmountModal').modal('hide');
        });
  }
  gotoAll() {
    this.router.navigateByUrl('amount-list');
  }
  gotoHome() {
    this.router.navigateByUrl('home');
  }
}
// FOR RUN DB:
// D:\Ravin.T\study\mean\practise\m-calc\back
