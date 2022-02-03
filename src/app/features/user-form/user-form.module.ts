import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { UserFormListComponent } from './components/user-form-list/user-form-list.component';
import { UserFormInputComponent } from './components/user-form-input/user-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserFormComponent,
    UserFormListComponent,
    UserFormInputComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class UserFormModule { }
