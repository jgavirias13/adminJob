import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobAddComponent } from './job-add/job-add.component';
import { JobGetComponent } from './job-get/job-get.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobService } from './job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobAddComponent,
    JobGetComponent,
    JobEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
