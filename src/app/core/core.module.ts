import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// -------------------------------------------------------------
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DataBindingRoutingModule } from '../features/data-binding/data-binding-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    DataBindingRoutingModule

    
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
