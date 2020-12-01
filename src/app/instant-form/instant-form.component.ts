import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instant-form',
  templateUrl: './instant-form.component.html',
  styleUrls: ['./instant-form.component.css']
})
export class InstantFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
records={
  name:"",
  email:"",
  company:"",
  salary:""
}
isCheck=false;
sendData(event){
let names=event.target.name;
const val=event.target.value;
this.records[names]=val

}
display(){
  this.isCheck=true
  console.log(this.records);
  
}

}
