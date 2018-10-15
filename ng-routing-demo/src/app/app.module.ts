import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutesModule } from './app-routes/app-routes.module';

//Routes defined :
//localhost:4200/users
//localhost:4200/users/:id
//localhost:4200/servers
//localhost:4200/servers/:id
//localhost:4200/page-not-found
//Defining all routes into a separate module - app-routes-module.ts
/*
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
      { path: ':id', component: ServerComponent },
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
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
