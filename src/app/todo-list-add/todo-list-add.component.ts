import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-list-add',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule],
  templateUrl: './todo-list-add.component.html',
  styleUrl: './todo-list-add.component.css'
})

export class TodoListAddComponent {
  newTask =''; 
  @Output() AddedItem = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.AddedItem.emit(this.newTask); 
      this.newTask = '';
    }
  }
}




