import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDemoRoutingModule } from './reactive-demo-routing.module';
import { ReactiveDemoComponent } from './reactive-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDemoListComponent } from './reactive-demo-list.component';


@NgModule({
  declarations: [
    ReactiveDemoComponent,
    ReactiveDemoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveDemoModule { }
