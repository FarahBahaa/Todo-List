import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemsComponent } from './todo-list-items.component';

describe('TodoListItemsComponent', () => {
  let component: TodoListItemsComponent;
  let fixture: ComponentFixture<TodoListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
