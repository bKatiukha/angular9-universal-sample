import { Component } from '@angular/core';

interface IRoute {
  link: string[];
  title: string;
  text: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  routes: IRoute[] = [
    {
      link: ['/ru', 'auth', 'login'],
      text: 'Login page',
      title: ''
    },
    {
      link: ['/ru', 'auth', 'registration'],
      text: 'Registration page',
      title: ''
    }
  ];
  constructor() {}
}
