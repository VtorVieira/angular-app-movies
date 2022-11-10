import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchAction } from 'src/app/store/store.state';

import { IMovies } from 'src/app/interfaces/Moveis';
import { ISearchTerm } from 'src/app/interfaces/SearchTerm';

import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies: IMovies[] = [];
  searchTerm: string = "";

  faSearch = faSearch;

  constructor(
    private store: Store<{ app: ISearchTerm; }>, // utilizando ngRx para passar o conteúdo digitado para a pagina search
    private popularService: SearchMoviesService,
    private router: Router,
  ) { }

  // prepara a variavel para receber a informação do store
  searchMovie$ = this.store.select('app').pipe(map((e) => e.searchMovie));

  ngOnInit(): void {
    /* Ao carregar a pagina, recupera a lista dos filmes mais populares */
    this.popularService.getPopularMovies().subscribe((movies) => {
      const data = movies.results;

      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
      });

      this.allMovies = data;
    });
  }

  /* Grava o texto do input */
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.searchTerm = value;
  }

  /* Envia o texto do input para a pagina de pesquisa */
  sendSearch() {
    this.store.dispatch(searchAction({ term: this.searchTerm })); // dispacha o texto digitado
    this.router.navigate(['/search']);
  }

}
