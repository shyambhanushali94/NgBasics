import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// -----------------------------------------------------------------
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,

  
    ],

  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DataBindingModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
