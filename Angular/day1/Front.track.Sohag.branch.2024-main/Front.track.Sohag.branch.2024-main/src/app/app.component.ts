import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //directive
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template:`
  // <h1>Hello App component</h1>
  // `,
  // styles:[`
  // h1{color:red}
  // `]
})
export class AppComponent {
  title = 'firstDemo';
}
