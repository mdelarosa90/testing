import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setup-and-tear-down',
  templateUrl: './setup-and-tear-down.component.html',
  styleUrls: ['./setup-and-tear-down.component.scss']
})
export class SetupAndTearDownComponent implements OnInit {

  totalVotes = 0;
  voteChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
  }

}
