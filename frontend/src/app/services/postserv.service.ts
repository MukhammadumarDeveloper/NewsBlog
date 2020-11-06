import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../home/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostservService {

  constructor(public http: HttpClient) { }

  public getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }

  public getPostByCategory(categoryName: string) {
    return this.http.post('http://localhost:3000/posts/' + categoryName, categoryName);
  }

  public updatePost(data, postId: string) {
    return this.http.put('http://localhost:3000/posts/' + postId, data);
  }
}
