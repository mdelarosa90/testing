import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {

  }
}

class ActivatedRouterStub {
  private subject = new Subject();
  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should redirect the user to the users page after save', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it ('should redirect the user to not-found page when an invalid user id is passed', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    const route: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
