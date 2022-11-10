import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/pages/details/details.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlayingComponent } from './components/pages/playing/playing.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { SearchComponent } from './components/pages/search/search.component';
import { UpcommingComponent } from './components/pages/upcoming/upcoming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'playing', component: PlayingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'upcomming', component: UpcommingComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'reviews/:id', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
