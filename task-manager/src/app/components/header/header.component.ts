import { Component } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string  = 'Tasks Tracker';
  showAddTask: boolean = false;
  subscribtion:Subscription = new Subscription();

  constructor(private uiService: UiService){

    this.subscribtion = this.uiService.onToggle()
    .subscribe(value => this.showAddTask = value )
  }

  toggleAddTask(){
    console.log("Toggle");
    this.uiService.toggleAddTask();

  }
}
