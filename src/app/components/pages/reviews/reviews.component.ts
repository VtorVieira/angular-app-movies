import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchMoviesService } from 'src/app/search-movies.service';
import { environment } from 'src/environments/environment';
import { IReviewsMovie } from 'src/app/interfaces/Reviews';
import { IDetailMovie } from 'src/app/interfaces/DetailMovie';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewsMovie: IReviewsMovie[] = [];
  image: IDetailMovie[] = [];

  constructor(private route: ActivatedRoute, private reviweService: SearchMoviesService, private detailService: SearchMoviesService,) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    /* getImage */
    this.detailService.getDetailMovie(id).subscribe((movie) => {
      const data = [movie as any];
      data.map((movie) => {
        movie.backdrop_path = `${environment.detailImgPath}${movie.backdrop_path}`;
      });
      this.image = data;
    });

    /* reviews */

    this.reviweService.getReviewsMovie(id).subscribe((movie) => {
      const data = movie.results;
      console.log(movie);
      data.map((movie) => {
        movie.created_at = new Date(movie.created_at!).toLocaleDateString('pt-BR');
      });
      this.reviewsMovie = data;
    });
  }

}
