import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent {
  task = '';
  id="";
  todo: any=[];

  constructor(private api: ApiService) {
    api.viewTask().subscribe((response) => {
      this.todo = response;
    });

   
  }

  readValues = () => {
    let data: any = { task: this.task, completed: false }; 
    console.log(data);
    this.api.addTask(data).subscribe((response: any) => {
      console.log(response);
     
      
   
    });
    this.task=""
    this.api.viewTask().subscribe((response) => {
      this.todo = response;
      this.todo.push(response);
      
    });
    
  }
  
  deleteTask=(id:any)=> {
   let data:any={"id":id}
    this.api.deleteTask(data).subscribe(
      
      (response:any)=>{
        console.log(response)
        this.todo = this.todo.filter((item: any) => item.id !== id); 
       
      }
    )
   
  }
 

  getCompletedTasksCount() {
    return this.todo.filter((item:any) => item.completed).length;
  }

  getIncompleteTasksCount() {
    return this.todo.filter((item:any) => !item.completed).length;
  }
}
