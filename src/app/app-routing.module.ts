import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmountListComponent } from './Pages/amount-list/amount-list.component';
import { AmountAddComponent } from './Pages/amount-add/amount-add.component';
import { MemberHistoryComponent } from './Pages/member-history/member-history.component';
import { AmountDetailsComponent } from './Pages/amount-details/amount-details.component';
import { AmountEditComponent } from './Pages/amount-edit/amount-edit.component';
import { FunctionListComponent } from './Pages/function-list/function-list.component';
import { FunctionDetailComponent } from './Pages/function-detail/function-detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { AllMembersComponent } from './Pages/all-members/all-members.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'function-list', component: FunctionListComponent },
  { path: 'function-detail', component: FunctionDetailComponent },
  { path: 'amount-list', component: AmountListComponent },
  { path: 'amount-add', component: AmountAddComponent },
  { path: 'amount-edit', component: AmountEditComponent },
  { path: 'all-members', component: AllMembersComponent },
  { path: 'member-history', component: MemberHistoryComponent },
  { path: 'amount-details/:id', component: AmountDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
