import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task : Task):void{
    // console.log(task)
    this.onDeleteTask.emit(task)
  }

  onToggle(task : Task) : void{
    this.onToggleReminder.emit(task);
  }


}
