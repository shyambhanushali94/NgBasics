import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '', pathMatch: 'full'

  },
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
  },
  {

    path: 'employee',
    loadChildren: () => import('../app/features/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./features/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  },
  { path: 'Users', loadChildren: () => import('./features/Assesment/users/users.module').then(m => m.UsersModule) },
  {
    path: 'newassesment',
    loadChildren: () => import('./features/newassesment/newassesment.module').then(m => m.NewassesmentModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
