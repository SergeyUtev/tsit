import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
newTask = '';
enteredTaskTitle = 'Task';
  constructor() { }

  ngOnInit() {
  }
onAddTask() {
  this.newTask = this.enteredTaskTitle;
}
}
