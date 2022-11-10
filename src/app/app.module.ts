import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { PlayingComponent } from './components/pages/playing/playing.component';
import { SearchComponent } from './components/pages/search/search.component';
import { UpcommingComponent } from './components/pages/upcoming/upcoming.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './store/store.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PopularComponent,
    PlayingComponent,
    SearchComponent,
    UpcommingComponent,
    DetailsComponent,
    ReviewsComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
