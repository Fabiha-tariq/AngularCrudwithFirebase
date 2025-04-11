import { EmployeeService } from './../../services/employee.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-read-employee',
  imports: [HeaderComponent, NgFor],
  templateUrl: './read-employee.component.html',
  styleUrl: './read-employee.component.css'
})
export class ReadEmployeeComponent {

  constructor(private EmployeeService:EmployeeService){}
  item:any[]=[];

  ngOnInit() {
    this.readEmployee();
  }
  readEmployee(){
    this.EmployeeService.getEmployee();
    this.EmployeeService.getItemObservable().subscribe((data) => {
      this.item = data;
    });
  }
}
