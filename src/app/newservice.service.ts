import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }
  employee:any[]=[{

    empid:'001',name:'suhas wakhare',salary:50000
  },
  {

    empid:'002',name:'vicky wakhare',salary:70000
  }
];
  display(){
    return "Suhas Wakhare";
  }
}
