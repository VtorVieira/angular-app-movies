import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Movies } from './interfaces/Moveis';
import { Response } from './interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  private searchApi = `${environment.baseApiUrl}search/movie?api_key=${environment.apiKey}&language=en-US&&query=`;
  private popularApi = `${environment.baseApiUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`;
  private upcomingApi = `${environment.baseApiUrl}/movie/upcoming?api_key=${environment.apiKey}&language=en-US&page=1`;
  private playingApi = `${environment.baseApiUrl}/movie/now_playing?api_key=${environment.apiKey}&language=en-US&page=1`;

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies(): Observable<Response<Movies[]>> {
    return this.http.get<Response<Movies[]>>(this.popularApi);
  }

  getUpcomingMovies(): Observable<Response<Movies[]>> {
    return this.http.get<Response<Movies[]>>(this.upcomingApi);
  }

  getPlayingMovies(): Observable<Response<Movies[]>> {
    return this.http.get<Response<Movies[]>>(this.playingApi);
  }

  getSearchMovie(search: string): Observable<Response<Movies[]>> {
    const url = `${this.searchApi}${search}&page=1&include_adult=false`;
    return this.http.get<Response<Movies[]>>(url);
  }
}
