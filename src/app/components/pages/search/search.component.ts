import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { IMovies } from 'src/app/interfaces/Moveis';
import { SearchMoviesService } from 'src/app/search-movies.service';
import { ISearchTerm } from 'src/app/store/store.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchMovies: IMovies[] = [];

  constructor(
    private store: Store<{ app: ISearchTerm; }>,
    private searchService: SearchMoviesService,
  ) { }

  searchMovie$ = this.store.select('app').pipe(map((e) => e.searchMovie));

  ngOnInit(): void {
    this.searchMovie$.subscribe((term) => {
      this.searchService.getSearchMovie(term).subscribe((movies) => {
        const data = movies.results;
        data.map((movie) => {
          movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
          movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
        });
        this.searchMovies = data;
      });
    });
  }
}
