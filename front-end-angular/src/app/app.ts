import { Component, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { getBackend } from './generated/api';

import { http } from './http';

import { User } from './generated/models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  users = signal<User[]>([]);


  async ngOnInit() {

    const api = getBackend(http);

    const response = await api.getApiUsers();

    this.users.set(response.data);
  }
}
