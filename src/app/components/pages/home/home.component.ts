import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { map } from 'rxjs';

import { Movies } from 'src/app/interfaces/Moveis';
import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ISearchTerm, searchAction } from 'src/app/store/store.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies: Movies[] = [];
  searchTerm: string = "";

  faSearch = faSearch;

  constructor(
    private store: Store<{ app: ISearchTerm; }>,
    private popularService: SearchMoviesService,
    private router: Router,
  ) { }

  searchMovie$ = this.store.select('app').pipe(map((e) => e.searchMovie));

  ngOnInit(): void {
    this.popularService.getPopularMovies().subscribe((movies) => {
      const data = movies.results;

      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
      });

      this.allMovies = data;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.searchTerm = value;
  }

  sendSearch() {
    this.store.dispatch(searchAction({ term: this.searchTerm }));
    this.router.navigate(['/search']);
  }

}
