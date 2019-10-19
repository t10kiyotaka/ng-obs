import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivated => {
      this.isActivated = didActivated;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
