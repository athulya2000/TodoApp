import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addTask=(data:any)=>{
    return this.http.post("http://localhost:8081/addTask",data)
  }
  viewTask=()=>{
    return this.http.get("http://localhost:8081/viewTask")
  }
  deleteTask=(data:any)=>{
    return this.http.post("http://localhost:8081/deleteTask",data)
  }
}
