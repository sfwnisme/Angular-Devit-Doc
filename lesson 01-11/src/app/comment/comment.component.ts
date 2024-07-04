import { Component } from '@angular/core';

@Component({
  selector: 'comment',
  standalone: true,
  imports: [],
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
      
    </ul>
  `,
  // templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {}
