import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'reactiveform';
   

  exform:FormGroup; 
  list:any;
  date3: Date[];
  
  display: boolean = false;
   
  ngOnInit(): void {
    this.list=[];
    this.date3;
    
    this.exform = new FormGroup({
      'name': new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'fromcity':new FormControl('',Validators.required),
      'tocity':new FormControl('',Validators.required),
      'number':new FormControl('',[Validators.required, Validators.pattern("^[0-3]*$")]),
      'date3':new FormControl('', Validators.required)

    });
  }
  add(){
    console.log(this.exform.value);
    this.list.push(this.exform.value);
    alert("your slot is booked");
    this.display = true;

  }
  reset(){
    this.exform.reset();
  }
  remove(){
    this.list.splice(0,1);
  }
      
    };
  
  
  
 

