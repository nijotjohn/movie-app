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
  
  api : string = "http://www.omdbapi.com/?apikey=91a1fdbc&s=love&page=20";

  
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.fetchDetails();
  }

  getMovies(){
    return this.http.get(this.api);
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
