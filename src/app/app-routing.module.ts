import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
  {
    path: 'directives',
    loadChildren: () => import('../app/features/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('../app/features/reactive-demo/reactive-demo.module').then(m => m.ReactiveDemoModule)
  },

  {
    
    path: 'user-forms',
    loadChildren: () => import('../app/features/user-form/user-form.module').then(m => m.UserFormModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
