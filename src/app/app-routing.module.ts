import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobAddComponent } from './job-add/job-add.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobGetComponent } from './job-get/job-get.component';

const routes: Routes = [
  {
    path: 'jobs/create',
    component: JobAddComponent
  },
  {
    path: 'jobs/edit/:id',
    component: JobEditComponent
  },
  {
    path: 'jobs',
    component: JobGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
