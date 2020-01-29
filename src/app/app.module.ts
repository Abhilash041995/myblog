import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './new/sidebar/sidebar.component';
import { HomeComponent } from './new/home/home.component';
import { FooterComponent } from './new/footer/footer.component';
import { ContactmeComponent } from './new/contactme/contactme.component';
import { SomegamesComponent } from './new/somegames/somegames.component';
import { AboutComponent } from './new/about/about.component';
import { BlogComponent } from './new/blog/blog.component';
import { SingleblogComponent } from './new/singleblog/singleblog.component';
import { DrawingsComponent } from './new/drawings/drawings.component';
import { TestComponent } from './new/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ContactmeComponent,
    SomegamesComponent,
    AboutComponent,
    BlogComponent,
    SingleblogComponent,
    DrawingsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
