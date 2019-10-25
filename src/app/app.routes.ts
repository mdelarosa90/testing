import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes = [
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent},
    { path: '', component: HomeComponent}
];
