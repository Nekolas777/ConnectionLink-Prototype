import { Injectable } from '@angular/core';
import {environment} from "../../../enviroments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForumApiService {

  baseUrL: string = environment.baseUrl;
  postsEndpoint: string = '/posts'

  constructor(private http: HttpClient) { }

  private postsPath() {
    return `${this.baseUrL}${this.postsEndpoint}`;
  }

  // llamamos cuando creamos un post y recibimos un objeto de tipo ForumPost
  createPost(item: any): Observable<any> {
    return this.http.post<any>(this.postsPath(), JSON.stringify(item)); // se maneraja errores luego
  }

  // obtener todos los posts
  getPosts(): Observable<any> {
    return this.http.get(this.postsPath());
  }
}


