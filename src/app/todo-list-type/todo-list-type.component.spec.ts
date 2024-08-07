import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTypeComponent } from './todo-list-type.component';

describe('TodoListTypeComponent', () => {
  let component: TodoListTypeComponent;
  let fixture: ComponentFixture<TodoListTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
