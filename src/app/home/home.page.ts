import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  activeTab = 'chats';

  constructor() {}

  ngOnInit() {}

  segmentChanged(e) {
    this.activeTab = e.target.value;
  }

  delete() {}
  search() {}
}
