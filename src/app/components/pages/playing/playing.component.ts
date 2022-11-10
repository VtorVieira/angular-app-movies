import { Component, OnInit } from '@angular/core';

import { IMovies } from 'src/app/interfaces/Moveis';
import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {
  playingMovies: IMovies[] = [];

  constructor(
    private playingService: SearchMoviesService,
  ) { }

  ngOnInit(): void {
    this.playingService.getPlayingMovies().subscribe((movies) => {
      const data = movies.results;

      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
      });

      this.playingMovies = data;
    });
  }

}
