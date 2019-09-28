import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { ServerComponent } from "./servers/server/server.component";
import { UserComponent } from "./users/user/user.component";
import { EditComponent } from "./servers/edit/edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    ServerComponent,
    UserComponent,
    EditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
