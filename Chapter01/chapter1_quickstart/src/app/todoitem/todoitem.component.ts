import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
itemCount: number;
todoItemText: string;
todoItems = [];
ngOnInit() {
this.itemCount = this.todoItems.length;
}
addTodoItem() {
this.todoItems.push(this.todoItemText);
this.todoItemText = '';
this.itemCount = this.todoItems.length;
}
}
