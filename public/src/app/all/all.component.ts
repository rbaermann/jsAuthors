import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService() {
    let obs = this._httpService.getAuthors();
    obs.subscribe(data => {
      console.log("Got our data!", data);
      this.authors = data["Author"];
    })
  }

  onDelete(author : any) {
    let obs = this._httpService.deleteAuthor(author);
    obs.subscribe(data => {
      console.log("Deleted selected author", data);
      this.getAuthorsFromService();
    })
  }

}
