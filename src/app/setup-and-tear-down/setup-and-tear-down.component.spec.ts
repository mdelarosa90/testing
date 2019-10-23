import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAndTearDownComponent } from './setup-and-tear-down.component';

describe('SetupAndTearDownComponent', () => {
  let component: SetupAndTearDownComponent;
  let fixture: ComponentFixture<SetupAndTearDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupAndTearDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAndTearDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    component.upVote();
    expect(totalVotes).not.toBeNull();
  });

});
