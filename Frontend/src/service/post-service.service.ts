import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import ApiResponse from '../Models/apiResponse';
import Post from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<ApiResponse>("http://localhost:3000/posts/all").pipe(map((data) => data.result || []));
  }
}
