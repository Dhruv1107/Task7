import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";
import { PostsService } from "./posts.service";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UnlessDirective } from "./unless.directive";
import { PopupComponent } from "./popup/popup.component";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterContentPipe } from "./filterContent.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FormComponent,
    routingComponents,
    UnlessDirective,
    PopupComponent,
    FilterContentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
