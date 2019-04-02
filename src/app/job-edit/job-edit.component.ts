import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  job: any = {};
  jobForm: FormGroup;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private js:JobService,
    private fb:FormBuilder) {
    
    this.createForm();
  }

  createForm(){
    this.jobForm = this.fb.group({
      job_nombre: ['', Validators.required],
      job_endPoint: ['', Validators.required],
      job_minutos: ['', Validators.required]
    });
  }

  updateJob(nombre, end_point, minutos){
    this.route.params.subscribe(params=>{
      this.js.updateJob(nombre, end_point, minutos,
        params['id']).subscribe(res=>{
          console.log(`Done: ${res}`);
          this.router.navigate(['jobs']);
        });
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.js.editJob(params['id']).subscribe(res=>{
        this.job = res;
        this.jobForm.get('job_nombre').setValue(this.job.nombre);
        this.jobForm.get('job_endPoint').setValue(this.job.end_point);
        this.jobForm.get('job_minutos').setValue(this.job.minutos);
      });
    });
  }
}
