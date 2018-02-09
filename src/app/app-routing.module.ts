import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { AddUserComponent }  from './add-user/add-user.component';
import { UpdateUserComponent }  from './manage-user/update-user.component';
import { ManageUserComponent }  from './manage-user/manage-user.component';

const routes: Routes = [
	{ path: 'add-user', component: AddUserComponent },
	{ path: 'manage-user', component: ManageUserComponent },
	{ path: 'update-user/:id', component: UpdateUserComponent },
	{ path: '', redirectTo: '/manage-user', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
