import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _students: BehaviorSubject<Student[]>;

  private dataStore: {
    students: Student[]
  }

  constructor( private http: HttpClient ) {
    this.dataStore = { students: [] };
    this._students = new BehaviorSubject<Student[]>([]);
   }

  private studentsUrl = '../assets/studentData.json';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getStudents(): Observable<Student[]>{
    this.loadAll();
    return this._students.asObservable();
  }

  getStudentDetail(id: number) {
    return this.dataStore.students.find(x => x.id == id);
  }


  private log(message: string) {
    console.log(message);
  }

  loadAll() {
    return this.http.get<Student[]>(this.studentsUrl)
      .subscribe(data => {
        this.dataStore.students = data;
        this._students.next(Object.assign({}, this.dataStore).students);
      }, error => {
        this.log("Failed to fetch users")
      });
  }

}
