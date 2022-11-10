import { Component, OnInit } from '@angular/core';

import { IMovies } from 'src/app/interfaces/Moveis';
import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  popularMovies: IMovies[] = [];

  constructor(
    private popularService: SearchMoviesService,
  ) { }

  ngOnInit(): void {
    this.popularService.getPopularMovies().subscribe((movies) => {
      const data = movies.results;

      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
      });

      this.popularMovies = data;
    });
  }

}
