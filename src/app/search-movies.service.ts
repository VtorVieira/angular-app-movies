import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IMovies } from './interfaces/Moveis';
import { IResponse } from './interfaces/Response';
import { IDetailMovie } from './interfaces/DetailMovie';
import { IRecommendation } from './interfaces/Recommendation';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  private baseApi = environment.baseApiUrl;
  private searchApi = `${environment.baseApiUrl}search/movie?api_key=${environment.apiKey}&language=en-US&&query=`;
  private popularApi = `${environment.baseApiUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`;
  private upcomingApi = `${environment.baseApiUrl}/movie/upcoming?api_key=${environment.apiKey}&language=en-US&page=1`;
  private playingApi = `${environment.baseApiUrl}/movie/now_playing?api_key=${environment.apiKey}&language=en-US&page=1`;

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies(): Observable<IResponse<IMovies[]>> {
    return this.http.get<IResponse<IMovies[]>>(this.popularApi);
  }

  getUpcomingMovies(): Observable<IResponse<IMovies[]>> {
    return this.http.get<IResponse<IMovies[]>>(this.upcomingApi);
  }

  getPlayingMovies(): Observable<IResponse<IMovies[]>> {
    return this.http.get<IResponse<IMovies[]>>(this.playingApi);
  }

  getSearchMovie(search: string): Observable<IResponse<IMovies[]>> {
    const url = `${this.searchApi}${search}&page=1&include_adult=false`;
    return this.http.get<IResponse<IMovies[]>>(url);
  }

  getDetailMovie(movieId: number): Observable<IDetailMovie[]> {
    const url = `${this.baseApi}/movie/${movieId}?api_key=${environment.apiKey}&language=en-US&page=1`;
    return this.http.get<IDetailMovie[]>(url);
  }

  getRecommendationsMovies(movieId: number): Observable<IResponse<IRecommendation[]>> {
    const url = `${this.baseApi}/movie/${movieId}/recommendations?api_key=${environment.apiKey}&language=en-US&page=1`;
    return this.http.get<IResponse<IRecommendation[]>>(url);
  }

  getReviewsMovie(movieId: number): Observable<IResponse<IMovies[]>> {
    const url = `${this.baseApi}/movie/${movieId}/reviews?api_key=${environment.apiKey}&language=en-US&page=1`;
    return this.http.get<IResponse<IMovies[]>>(url);
  }
}
