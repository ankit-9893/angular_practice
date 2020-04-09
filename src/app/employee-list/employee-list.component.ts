import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public empList = [ ];

  constructor(private _employeeService : EmployeeService) {  }

  ngOnInit(): void {
    this._employeeService.getAllEmployees()
      .subscribe(data => this.empList = data);
  }

}
