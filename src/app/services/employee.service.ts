import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { onValue, push, ref, set } from 'firebase/database';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbPath = 'Employees';
  private employeeSubject = new BehaviorSubject<any[]>([]);

  constructor(private db : Database) { }

  createEmployee(item: any){
    const Empref = ref(this.db,this.dbPath);
    const newEmpref = push(Empref);
    return set(newEmpref,item);
  }

  getEmployee(){
    const Empref = ref(this.db,this.dbPath);
    onValue(Empref, (snapshot) => {
      const data = snapshot.val();

      if (data && typeof data === 'object') {
        this.employeeSubject.next(
          Object.entries(data).map(([id, value]) =>
            typeof value === 'object' ? { id, ...value } : { id, value }
          )
        );
      }
      else {
        this.employeeSubject.next([]);
      }
    })

  };


  getItemObservable(): Observable<any[]> {
    return this.employeeSubject.asObservable();
  }
}

