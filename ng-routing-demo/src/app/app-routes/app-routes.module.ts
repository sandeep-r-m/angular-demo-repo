import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ServerDataResolverService } from '../servers/server/server-data-resolver.service';


//Routes defined :
//localhost:4200/users
//localhost:4200/users/:id
//localhost:4200/servers
//localhost:4200/servers/:id
//localhost:4200/page-not-found
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: ':id', component: UserComponent }
    ]
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerDataResolverService } },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  {
    path: "page-not-found",
    component: PagenotfoundComponent
  },
  {
    path: "**",
    redirectTo: "/page-not-found" // ng wildcard with redirect to handle undefined urls
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
