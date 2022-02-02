import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDemoListComponent } from './reactive-demo-list.component';
import { ReactiveDemoComponent } from './reactive-demo.component';

const routes: Routes = [

  
  {
    path: '',
    component:ReactiveDemoListComponent
  },
  {
    path: 'add',
    component:ReactiveDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDemoRoutingModule { }
