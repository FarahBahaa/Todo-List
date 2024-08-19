import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-todo-list-items',
  standalone: true,
  imports: [MatButtonModule, MatListModule, MatDividerModule, MatIconModule, MatCheckboxModule],
  templateUrl: './todo-list-items.component.html',
  styleUrl: './todo-list-items.component.css'
})
export class TodoListItemsComponent {

}
