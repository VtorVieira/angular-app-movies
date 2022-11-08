import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  private popularApi = 'https://api.themoviedb.org/3/movie/upcoming?api_key=32b2538fae9d6a2e14d1539dde85893f&language=en-US&page=1';
  private searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=32b2538fae9d6a2e14d1539dde85893f&language=en-US&query=';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(search: string): Observable<string[]> {
    return this.http.get<string[]>(this.searchApi + search + '&page=1&include_adult=false');
  }
}
