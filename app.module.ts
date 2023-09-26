import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/users/users.component';
import { UserComponent } from './user/user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { PostsComponent } from './post/posts/posts.component';
import { PostComponent } from './post/post/post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
