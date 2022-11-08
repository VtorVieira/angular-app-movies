import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PlayingComponent } from './components/pages/playing/playing.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { UpcommingComponent } from './components/pages/upcomming/upcomming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playing', component: PlayingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'upcomming', component: UpcommingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
