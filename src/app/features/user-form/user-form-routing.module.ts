import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormInputComponent } from './components/user-form-input/user-form-input.component';
import { UserFormListComponent } from './components/user-form-list/user-form-list.component';
import { UserFormComponent } from './user-form.component';

const routes: Routes = [

  {
    path: '', component: UserFormComponent,
    children:[
      {
        path: '',
        component: UserFormListComponent
      },
      {
        path: 'user-list',
        component: UserFormListComponent
      },
      {
        path: 'add',
        component: UserFormInputComponent
      }
    ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
