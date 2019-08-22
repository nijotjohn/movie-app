import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {


  movies : any;
  movieList : any;
  searchKeyword : string = '';
  
  api : string = "http://www.omdbapi.com/?apikey=91a1fdbc";
  searchApi : string = '';

  
  constructor(private http : HttpClient) { }

  ngOnInit() {
    // this.fetchDetails();
  }

  onKeywordSearch(){
    this.searchApi = this.api+'&s='+this.searchKeyword;
    this.fetchDetails();
  }

  getMovies(){
    return this.http.get(this.searchApi);
  }

  fetchDetails(){
    this.getMovies().subscribe(data => {
      this.movieList = data;
      this.movies = Object.keys(this.movieList).map(key => ({type: key, value: this.movieList[key]}));
      // this.movies = Object.keys(this.movieList).map(i => this.movieList[i]);
      // const usersJson: any[] = Array.of(res.json());
      
      console.log(this.movies);
      
      return this.movies;
    });
    
  }
  

}
