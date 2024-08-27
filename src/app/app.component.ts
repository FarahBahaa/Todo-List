import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListAddComponent } from './todo-list-add/todo-list-add.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListItemsComponent } from './todo-list-items/todo-list-items.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TodoListAddComponent, TodoListHeaderComponent, TodoListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
  
  items: { text: string, isEditable?: boolean }[] = [];

  addItem(newTask: string){    
    this.items.push({ text: newTask, isEditable: false });
    
    
  }
}
