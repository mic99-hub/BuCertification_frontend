import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent {

  employee: Employee= new Employee();

  constructor(private employeeService : EmployeeService,
              private router : Router) {
  }

  saveEmployee(){
    this.employeeService.saveEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employee-list']);}

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
