import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(postData: any) {
    return this.http.post('https://tarjeta.fly.dev/users/nuevo', postData);
  }
}
