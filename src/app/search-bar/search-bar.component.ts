import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchMoviesService } from '../search-movies.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  movies: any;

  constructor(private moviesService: SearchMoviesService) { }

  ngOnInit(): void {
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.searchTerm = value;
  }

  sendSearch(): void {
    this.moviesService.getMovies(this.searchTerm).subscribe(result => {
      this.movies = result;
    });
  }

}
