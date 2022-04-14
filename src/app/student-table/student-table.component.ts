import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { StudentService } from '../data/student.service';
import { Student } from '../models/student';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less'],
  providers: [DialogService]
})
export class StudentTableComponent implements OnInit {

  students: Student[] = []; 
  //student: Student; 
  display: boolean = false;
  
  

  constructor(private studentService: StudentService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

 
  /**The function to open a dialog with the detail of a student */
  studentDetail(student: Student): void {
      this.dialogService.open(StudentDetailComponent, {
        data: {
          student: student
        },
        header: 'Student details',
        width: '50%'
      });
    
  }

}


