import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-items',
  standalone: true,
  imports: [MatButtonModule, MatListModule, MatDividerModule, MatIconModule, MatCheckboxModule, FormsModule,
    CommonModule
  ],
  templateUrl: './todo-list-items.component.html',
  styleUrl: './todo-list-items.component.css'
})

export class TodoListItemsComponent {
  @Input() items: {text: string; isEditable?: boolean; completed?: boolean} [] = [];

  deleteItem(task: {text:string}) {
    this.items = this.items.filter(item => item.text !== task.text);
  }

  editItem(task: {isEditable?:boolean}){
    task.isEditable = !task.isEditable;
    }
  }
  
    
  
