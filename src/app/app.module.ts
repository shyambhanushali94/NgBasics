import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// -----------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// import { UserFormModule } from './features/user-form/user-form.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    CommonModule ,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DataBindingModule,
    HttpClientModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
