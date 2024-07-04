import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `<h3>{{ username }} {{ occupation }}</h3>`,
  // templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username: string = 'youngTech';
  @Input() occupation: string | undefined;
  // @Output() text: string = 'this is a text';
}
