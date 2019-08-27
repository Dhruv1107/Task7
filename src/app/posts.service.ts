import { Injectable } from "@angular/core";

import { Posts } from "./posts";
import { POSTSDATA } from "./posts-data";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  popup: Posts[];
  filteredData: Posts[];
  public eventClicked = new Subject<Event>();
  constructor(private router: Router, private http: HttpClient) {}

  getSelectedPost(name: string): Posts[] {
    return POSTSDATA.filter(post => post.heading === name);
  }
  addPost(addPost: Posts[]): void {
    // POSTSDATA.push(addPost);
    this.http
      .post("https://newsfeed-6ee3e.firebaseio.com/posts.json", addPost)
      .subscribe(response => {
        console.log(response);
      });
  }
  addPopUp(id: number): Posts[] {
    return POSTSDATA.filter(post => post.id == id);
  }
  getPosts() {
    return this.http.get("https://newsfeed-6ee3e.firebaseio.com/posts.json");
  }
}
