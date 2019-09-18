import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor : any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editAuthor = {};
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params["id"]).subscribe((author) => {
        this.editAuthor = author;
      })
    })
  }

  goHome() {
    this._router.navigate(['/']);
  }

  onEdit() {
    let obs = this._httpService.editAuthor(this.editAuthor);
    obs.subscribe(data => {
      console.log("Updated selected data", data);
      this.editAuthor = {};
    })
    this.goHome();
  }
}
