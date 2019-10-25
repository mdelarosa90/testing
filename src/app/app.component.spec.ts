import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        UserDetailsComponent
      ],
      imports: [RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'awesomeApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('awesomeApp');
  });

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

  it ('should have a link to users page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const index = debugElements.findIndex(de => de.attributes['routerLink'] === 'users');
    expect(index).toBeGreaterThan(-1);
  });

});
