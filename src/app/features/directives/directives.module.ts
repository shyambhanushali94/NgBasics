import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]


})
export class DirectivesModule { }
