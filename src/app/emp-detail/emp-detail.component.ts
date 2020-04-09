import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public empList = [ ];
  public errorMessage = ""; 

  constructor(private _employeeService : EmployeeService) {  }

  ngOnInit(): void {
    this._employeeService.getAllEmployees()
      .subscribe(data => this.empList = data);

    // this._employeeService.getAllEmployees()
    //   .subscribe(data => this.empList = data, error => this.errorMessage = error);
  }

}
