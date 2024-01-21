import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component, Output, EventEmitter } from '@angular/core';
import { Task
 } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


text : string = '';
day: string = '';
reminder: boolean = false;
showAddTask: boolean = false;
subscribtion : Subscription = new Subscription();


constructor(private uiService:UiService){
  this.subscribtion = this.uiService.onToggle()
  .subscribe(value => this.showAddTask = value )
}

onSubmit(){
  if(!this.text){
    alert('Please Add Task');
    return;
  }

  const newTask = {
    text: this.text,
    day: this.day,
    reminder : this.reminder,
  };

  this.onAddTask.emit(newTask);

  this.text= "";
  this.day= "";
  this.reminder= false;

}

}
