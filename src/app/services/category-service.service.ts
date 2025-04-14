import { Injectable } from '@angular/core';
import { Database, update } from '@angular/fire/database';
import { onValue, push, ref, set, get } from 'firebase/database';
import { BehaviorSubject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private dbPath = 'Category';
  private categorySubject = new BehaviorSubject<any[]>([]);

  constructor(private db: Database) { }

  createCategory(item: any) {
    const Catref = ref(this.db, this.dbPath);
    const NewCatref = push(Catref);
    return set(NewCatref, item);
  }

  getCategory() {
    const CatRef = ref(this.db, this.dbPath);
    onValue(CatRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === 'object') {
        this.categorySubject.next(
          Object.entries(data).map(([id, value]) =>
            typeof value === 'object' ? { id, ...value } : { id, value }
          )
        );
      } else {
        this.categorySubject.next([]);
      }
    });
  }

  getItemObservable(): Observable<any[]> {
    return this.categorySubject.asObservable();
  }

  // Implementation of getCategoryById
  getCategoryById(id: string): Observable<any> {
    const categoryRef = ref(this.db, `${this.dbPath}/${id}`);
    return from(
      get(categoryRef).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      })
    );
  }

  updatesCategory(id:string,updateData:any){
    const bookRef = ref(this.db, `${this.dbPath}/${id}`);
    return update(bookRef,updateData);
  }
}
