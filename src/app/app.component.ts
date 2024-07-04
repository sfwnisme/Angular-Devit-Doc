import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentComponent } from './comment/comment.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, ChildComponent, CommentComponent, NgOptimizedImage],
  template: ` <section>
    the app component
    <app-user occupation="angular testing @Input" />
    @if (isLoggedIn) {
    <p>this is a confitional syntax in angular</p>
    <p>Welcome, user</p>
    }
    <div>
      <mark>the server status </mark>
      @if (isServerRunning) {
      <small>:yes, the server is running</small>
      } @else {
      <small> :no, the server is not running</small>
      }
    </div>
    <hr />
    <div>
      <mark>the operating systems</mark>
      @for (os of operatingSystems; track os.id) {
      <small> {{ os.name }},</small>
      }
    </div>
    <hr />
    <div>
      <mark>the users</mark>
      @for (user of users; track user.id) {
      <small>{{ user?.id }}: {{ user.name }},</small>
      }
    </div>
    <hr />
    <div class="image-container">
      <mark>Properties Binding</mark>
      <!-- <img [ngSrc]="imageURL" [alt]="imageURL" width="40" height="40" /> -->
    </div>
    <div>
      <mark>Editable Content</mark>
      <div [contentEditable]="isEditable">sfnw is Editable</div>
    </div>
    <hr />
    <div>
      <button (click)="greet()">Greet</button>
    </div>
    <hr />
    <div>
      <mark>Input & Output communication (props alternative)</mark>
    </div>
    <div>
      <span (mouseover)="onMouseOver()">{{ message }} overme</span>
    </div>
    <app-child (addItemEvent)="addItemParent($event)" />
    <p>all the way down {{ items.length }}</p>
    @for (item of items; track item) {
    <p>{{ item }}</p>
    }
    <hr />
    <div>
      <h1>How I feel about Angular?</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also ed with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the
          best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also ed with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the
          best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also ed with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the
          best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted.
        </p>
      </article>
      @defer(on viewport){
      <comment />
      } @placeholder{
      <mark>future comments</mark>
      } @loading (minimum 2s){
      <mark>loading...</mark>
      }
    </div>
    <hr />
    <div>
      <h1>Optimizing Images</h1>
      <ol>
        <li>
          <img
            [ngSrc]="logoUrl"
            [alt]="logoAlt"
            width="40"
            height="40"
            priority
          />
        </li>
        <li>
          <!-- <img [src]="logoUrl2" [alt]="logoAlt" width="40" height="40" /> -->
        </li>
        <li>
          <!-- <img src="logoUrl2" alt="logoAlt" width="40" height="40" /> -->
        </li>
      </ol>
    </div>
  </section>`,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: string[] = [];
  addItemParent(item: string) {
    this.items.push(item);
  }
  title: string = 'lesson-01'; // this named
  city: string = 'San francisco'; // invoking it in the template in this way {{city}}
  names: string[] = ['John', 'Doe', 'Jane', 'Doe']; // invoking in this way using @for (name of names) {{name}}
  // this field you can write your behaviors and components logic like properties, etc...
  // conditinal syntax
  isLoggedIn: boolean = true;
  isServerRunning: boolean = false;

  // the template repeating syntax
  operatingSystems: { id: string; name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MaxOs' },
    { id: 'linux', name: 'Linux' },
  ];

  users: { id: number; name: string }[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  imageURL: string = '/assets/logo.svg';
  isEditable: boolean = true;

  // Event handling
  greet(): void {
    console.log('Hello, Angular');
  }
  message: string = '';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  // Optimizing images
  logoUrl2: string = '/assets/angularjs.png';
  logoAlt: string = 'logo';
  logoUrl: string =
    'https://miro.medium.com/v2/resize:fit:2000/1*Cstrou_TvKMgRe2Qt_ZDfw.png';
}
/* Notes
 * the components logic and behaviors ar defined in the component's class
 * control flow sytnax in angular is @if, @else, @for, and etc...
 * */
