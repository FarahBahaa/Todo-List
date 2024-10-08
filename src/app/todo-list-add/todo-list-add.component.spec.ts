import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAddComponent } from './todo-list-add.component';

describe('TodoListAddComponent', () => {
  let component: TodoListAddComponent;
  let fixture: ComponentFixture<TodoListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
