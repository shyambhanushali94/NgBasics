import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule, routingComponents } from './data-binding-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
