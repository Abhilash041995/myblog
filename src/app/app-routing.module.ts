import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './new/home/home.component';
import { ContactmeComponent } from './new/contactme/contactme.component';
import { SomegamesComponent } from './new/somegames/somegames.component';
import { AboutComponent } from './new/about/about.component';
import { BlogComponent } from './new/blog/blog.component';
import { SingleblogComponent } from './new/singleblog/singleblog.component';
import { DrawingsComponent } from './new/drawings/drawings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-me', component: ContactmeComponent },
  { path: 'some-games', component: SomegamesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'single-blog', component: SingleblogComponent},
  { path: 'drawings', component: DrawingsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
