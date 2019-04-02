import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  uri = "http://192.168.0.14:4000/job";

  constructor(private http:HttpClient) { }

  addJob(nombre, end_point, minutos){
    const job={
      nombre: nombre,
      end_point: end_point,
      minutos: minutos
    }

    console.log(job);
    return this.http.post(`${this.uri}/add`, job);
  }

  getJobs(){
    return this.http.get(`${this.uri}`);
  }

  editJob(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateJob(nombre, end_point, minutos, id){
    const obj = {
      nombre: nombre,
      end_point: end_point,
      minutos: minutos,
    }

    return this.http.post(`${this.uri}/update/${id}`, obj);
  }

  deleteJob(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
