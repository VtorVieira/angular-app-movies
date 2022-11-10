import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDetailMovie } from 'src/app/interfaces/DetailMovie';
import { IGenres } from 'src/app/interfaces/Genres';
import { IRecommendation } from 'src/app/interfaces/Recommendation';

import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailMovie: IDetailMovie[] = [];
  recommendations: IRecommendation[] = [];

  constructor(
    private route: ActivatedRoute, // rota necessária para pegar o parametro da URL
    private detailService: SearchMoviesService,
    private recommendationService: SearchMoviesService,
  ) { }

  ngOnInit(): void {
    /* Pega o id da URL */
    const id = Number(this.route.snapshot.paramMap.get("id"));

    /* Detail */
    this.detailService.getDetailMovie(id).subscribe((movie) => {
      const data = [movie as any];
      data.map((movie) => {
        movie.release_date = new Date(movie.release_date!).toLocaleDateString('pt-BR');
        movie.backdrop_path = `${environment.detailImgPath}${movie.backdrop_path}`;
        movie.genres = (movie.genres.map((genre: IGenres) => ` ${genre.name}`));
        movie.runtime = this.convertHour(movie.runtime);
      });

      this.detailMovie = data;
    });

    /* Recommendation */
    this.recommendationService.getRecommendationsMovies(id).subscribe((movie) => {
      const data = movie.results;
      data.map((movie) => {
        movie.backdrop_path = `${environment.recommendationImgPath}${movie.backdrop_path}`;
      });
      this.recommendations = data;
    });
  }

  convertHour(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);

    return `${textoHoras}h ${textoMinutos}m`;
  }
}
