import { EmployeeService } from './../../services/employee.service';
import { HeaderComponent } from './../../header/header.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [HeaderComponent,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  successMessage = '';
  newEmployee = {
    name : '',
    email : '',
    address : '',
    salary : ''
  };

  constructor(private EmployeeService:EmployeeService, private router: Router){}

  // add employee
  addEmployee(){
    if(this.newEmployee.name.trim()&& this.newEmployee.email.trim()&& this.newEmployee.address.trim()&& this.newEmployee.salary){
      this.EmployeeService.createEmployee(this.newEmployee).then(
        ()=> {
          alert('Employee added successfully');
          this.clearForm();
          this.router.navigate(['/employee']);
        });
    }
  };

  clearForm(){
    this.newEmployee = {
      name : '',
      email : '',
      address : '',
      salary : ''
    };
    setTimeout(()=>(this.successMessage = ''),3000);
  };
}
