import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {

  jobForm: FormGroup;

  constructor(private fb: FormBuilder,
    private js: JobService,
    private router:Router) {
      this.createForm();
  }

  private createForm(){
    this.jobForm = this.fb.group({
      job_nombre: ['', Validators.required],
      job_endPoint: ['', Validators.required],
      job_minutos: ['', Validators.required]
    })
  }

  addJob(nombre, end_point, minutos){
    this.js.addJob(nombre, end_point, minutos).subscribe(res => {
      console.log(`Done: ${res}`);
      this.router.navigate(['jobs']);
    }, err => {
      console.log(`Error: ${err.status} ${err.message}`)
    });
  }

  ngOnInit() {
  }

}
