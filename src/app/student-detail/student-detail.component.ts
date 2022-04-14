import { Component, Inject, OnInit } from '@angular/core';
import { StudentService } from '../data/student.service';
import { Student } from '../models/student';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.less']  
})

export class StudentDetailComponent implements OnInit {  
  student: Student;
  //student_id: number;
  
  constructor(private studentService: StudentService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
    this.student = config.data.student;
    //this.student = new Student();
  }

  ngOnInit(): void {  
     //this.student = this.studentService.getStudentDetail(this.student_id);
     //const newObject = Object.assign(this.student, this.studentService.getStudentDetail(this.student_id));
     console.log('some words ' + this.student.class);             
  }

} 