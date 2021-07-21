import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from '../../Services/api.service';
declare var $: any;

@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.css']
})

export class AmountListComponent implements OnInit {
  // faCoffee = faCoffee;
  submitted = false;
  allAmountList: any = [];
  allUpAmountList: any = [];
  cashType: any;
  crAmount: any;

  constructor(private router: Router, private api: ApiService, public fb: FormBuilder) { }

  AddAmountForm = this.fb.group({
    adName: ['', [Validators.required]],
    adAddress: ['', [Validators.required]],
    adAmount: ['', [Validators.required]]
  })
  get aaForm() {
    return this.AddAmountForm.controls;
  }


  updateAmountForm = this.fb.group({
    upDate: ['', [Validators.required]],
    upFunction: ['', [Validators.required]],
    upAmtType: [''],
    upAmount: ['', [Validators.required]],
    AmountType: ['', [Validators.required]]
  })
  get uaForm() {
    return this.updateAmountForm.controls;
  }

  ngOnInit(): void {
    this.GetAllAmounts();
  }

  GetAllAmounts() {
    // debugger;

    let headerOpions = this.api.commonHeaders("token");
    this.api
      .doGET(this.api.rootUrl + this.api.allAmounts, headerOpions)
      .subscribe(
        (result: any) => {
          this.allAmountList = result;
          // console.log("Amounts:", this.allAmountList);
        },
        (error: any) => {
          console.log("Errorrrr", error);
        });

  }

  onSubmit(): void {
    // if (buttonType === "amountAdd") {
    this.submitted = true;
    debugger;
    if (!this.AddAmountForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      // return false;
    } else {
      console.log(this.AddAmountForm.value)
    }

    let postData = {
      "Name": this.AddAmountForm.value.adName ? this.AddAmountForm.value.adName : "-",
      "Address": this.AddAmountForm.value.adAddress ? this.AddAmountForm.value.adAddress : '-',
      "Amount": this.AddAmountForm.value.adAmount ? this.AddAmountForm.value.adAmount : '0',
      "Credit": this.allAmountList.Credit ? this.allAmountList.Credit : '0',
      "Debit": this.allAmountList.Debit ? this.allAmountList.Debit : '0',
      "FunctionName": this.allAmountList.FunctionName ? this.allAmountList.FunctionName : '-',
      "Date": this.allAmountList.Date ? this.allAmountList.Date : '-',
      "AmountType": this.allAmountList.AmountType ? this.allAmountList.AmountType : '-',
      "Status": 0,
    }

    let headerOpions = this.api.commonHeaders("");
    this.api
      .doPOST(this.api.rootUrl + this.api.allAmounts, postData, headerOpions)
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
    // }
    // if (buttonType === "amountUpdate") {

    //   this.submitted = true;
    //   debugger;
    //   if (!this.updateAmountForm.valid) {
    //     alert('Please fill all the required fields to create a super hero!')
    //     // return false;
    //   } else {
    //     console.log(this.updateAmountForm.value)
    //   }

    //   if (this.cashType == "Credit") {
    //     this.crAmount = this.allUpAmountList.Amount + this.updateAmountForm.value.upAmount;
    //     console.log("D_Amiunt", this.crAmount)
    //   }
    //   if (this.cashType == "Debit") {
    //     this.crAmount = this.allUpAmountList.Amount - this.updateAmountForm.value.upAmount;
    //     console.log("C_Amiunt", this.crAmount)
    //   }

    //   let postData = {
    //     "id": this.allUpAmountList.id,
    //     "Name": this.allUpAmountList.Name ? this.allUpAmountList.Name : "-",
    //     "Address": this.allUpAmountList.Address ? this.allUpAmountList.Address : '-',

    //     "Amount": this.crAmount ? this.crAmount : '0',
    //     "Credit": this.allUpAmountList.Credit ? this.allUpAmountList.Credit : '0',
    //     "Debit": this.allUpAmountList.Debit ? this.allUpAmountList.Debit : '0',
    //     "FunctionName": this.updateAmountForm.value.FunctionName ? this.updateAmountForm.value.FunctionName : '-',
    //     "Date": this.updateAmountForm.value.upDate ? this.updateAmountForm.value.upDate : '-',
    //     "AmountType": this.updateAmountForm.value.AmountType ? this.updateAmountForm.value.AmountType : '-',
    //   }

    //   let headerOpions = this.api.commonHeaders("");
    //   this.api
    //     .doPUT(this.api.rootUrl + this.api.allAmounts + "/" + this.allUpAmountList.id, postData, headerOpions)
    //     .subscribe(
    //       (result: any) => {
    //         this.allAmountList = result;
    //         // console.log("Amounts:", this.allAmountList);
    //         $('#updateAmountModal').modal('hide');

    //       },
    //       (error: any) => {
    //         console.log("Errorrrr", error);
    //         alert(error);
    //         $('#updateAmountModal').modal('hide');
    //       });
    // }

  }

  viewDetail(id: number): void {
    console.log('id', id);
    this.router.navigate(['amount-details', id]);
  }

  edit(e: any) {
    console.log("E:", e)
  }

  updateAmount(updata: any) {
    console.log("E:", updata)
    this.allUpAmountList = updata;
  }
  changedVal(value) {
    this.cashType = value;
  }

  // updateAmntonSubmit() {
  //   this.submitted = true;
  //   debugger;
  //   if (!this.updateAmountForm.valid) {
  //     alert('Please fill all the required fields to create a super hero!')
  //     return false;
  //   } else {
  //     console.log(this.updateAmountForm.value)
  //   }

  //   if (this.cashType == "Credit") {
  //     this.crAmount = this.allUpAmountList.Amount + this.updateAmountForm.value.upAmount;
  //     console.log("D_Amiunt", this.crAmount)
  //   }
  //   if (this.cashType == "Debit") {
  //     this.crAmount = this.allUpAmountList.Amount - this.updateAmountForm.value.upAmount;
  //     console.log("C_Amiunt", this.crAmount)
  //   }

  //   let postData = {
  //     "id": this.allUpAmountList.id,
  //     "Name": this.allUpAmountList.Name ? this.allUpAmountList.Name : "-",
  //     "Address": this.allUpAmountList.Address ? this.allUpAmountList.Address : '-',

  //     "Amount": this.crAmount ? this.crAmount : '0',
  //     "Credit": this.allUpAmountList.Credit ? this.allUpAmountList.Credit : '0',
  //     "Debit": this.allUpAmountList.Debit ? this.allUpAmountList.Debit : '0',
  //     "FunctionName": this.updateAmountForm.value.FunctionName ? this.updateAmountForm.value.FunctionName : '-',
  //     "Date": this.updateAmountForm.value.upDate ? this.updateAmountForm.value.upDate : '-',
  //     "AmountType": this.updateAmountForm.value.AmountType ? this.updateAmountForm.value.AmountType : '-',
  //   }

  //   let headerOpions = this.api.commonHeaders("");
  //   this.api
  //     .doPUT(this.api.rootUrl + this.api.allAmounts + "/" + this.allUpAmountList.id, postData, headerOpions)
  //     .subscribe(
  //       (result: any) => {
  //         this.allAmountList = result;
  //         // console.log("Amounts:", this.allAmountList);
  //         $('#updateAmountModal').modal('hide');

  //       },
  //       (error: any) => {
  //         console.log("Errorrrr", error);
  //         alert(error);
  //         $('#updateAmountModal').modal('hide');
  //       });

  // }

  gotoBack() {
    this.router.navigateByUrl('function-list');
  }
  gotoHome() {
    this.router.navigateByUrl('home');
  }
}
