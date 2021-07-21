import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmountListComponent } from './Pages/amount-list/amount-list.component';
import { AmountAddComponent } from './Pages/amount-add/amount-add.component';
import { MemberHistoryComponent } from './Pages/member-history/member-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmountDetailsComponent } from './Pages/amount-details/amount-details.component';
import { AmountEditComponent } from './Pages/amount-edit/amount-edit.component';
import { FunctionListComponent } from './Pages/function-list/function-list.component';
import { FunctionDetailComponent } from './Pages/function-detail/function-detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { AllMembersComponent } from './Pages/all-members/all-members.component';


@NgModule({
  declarations: [
    AppComponent,
    AmountListComponent,
    AmountAddComponent,
    MemberHistoryComponent,
    AmountDetailsComponent,
    AmountEditComponent,
    FunctionListComponent,
    FunctionDetailComponent,
    HomeComponent,
    AllMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
