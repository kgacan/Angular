import { ServerResolverService } from "./services/server-resolver.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditComponent } from "./servers/edit/edit.component";
import { CanDeactivateGuardService } from "./services/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "servers",
    component: ServersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService }
      },
      {
        path: ":id/edit",
        component: EditComponent,
        canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }]
  },
  // { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page  not found!" }
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
