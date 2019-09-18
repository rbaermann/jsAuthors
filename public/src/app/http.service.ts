import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getAuthors();
  }

  getAuthors() {
    return this._http.get('/authors')
  }

  getAuthor(id) {
    return this._http.get(`/authors/${id}`);
  }

  addAuthor(newAuthor : any) {
    return this._http.post('/authors', newAuthor)
  }

  editAuthor(editAuthor : any) {
    return this._http.put(`/authors/${ editAuthor._id }`, editAuthor)
  }

  deleteAuthor(deleteAuthor : any) {
    return this._http.delete(`/authors/${ deleteAuthor._id }`, deleteAuthor)
  }
}
