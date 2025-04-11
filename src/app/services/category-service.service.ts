import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { push, ref, set } from 'firebase/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
 private dbPath = 'Category';
 private categorySubject = new BehaviorSubject<any[]>([]);

  constructor(private db:Database) { }

  createCategory(item: any){
    const Catref = ref(this.db,this.dbPath);
    const NewCatref = push(Catref);
    return set(NewCatref,item);
  }

  getCategory(){
    
  }
}
