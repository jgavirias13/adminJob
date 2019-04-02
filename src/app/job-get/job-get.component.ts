import { Component, OnInit } from '@angular/core';
import Job from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-get',
  templateUrl: './job-get.component.html',
  styleUrls: ['./job-get.component.css']
})
export class JobGetComponent implements OnInit {

  jobs: Job[];

  constructor( private js: JobService) { }

  ngOnInit() {
    this.fetchData();
  }

  deleteJob(id){
    if(confirm("Are you sure?")){
      this.js.deleteJob(id).subscribe(res=>{
        console.log(`Response:`);
        console.log(res);
        this.fetchData();
      })
    }
  }

  fetchData(){
    this.js.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }

}
