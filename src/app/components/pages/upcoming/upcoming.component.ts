import { Component, OnInit } from '@angular/core';

import { Movies } from 'src/app/interfaces/Moveis';
import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcommingComponent implements OnInit {
  upcomingMovies: Movies[] = [];

  constructor(
    private upcomingService: SearchMoviesService,
  ) { }

  ngOnInit(): void {
    this.upcomingService.getUpcomingMovies().subscribe((movies) => {
      const data = movies.results;

      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.imgPath}${movie.backdrop_path}`;
      });

      this.upcomingMovies = data;
    });
  }

}
