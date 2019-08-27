import { Component, OnInit, ViewChild } from "@angular/core";
import { Posts } from "../posts";
import { POSTSDATA } from "../posts-data";
import { PostsService } from "../posts.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  posts: Posts[] = [];
  allData: Posts[] = [];
  filteredStatus: string = "";
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params.name === "ALL") {
        this.posts = this.allData;
      } else {
        this.getSourceDisplay(params.name);
        this.posts;
      }
    });
    this.authService
      .returnFilteredStatus()
      .subscribe((filteredStatus: string) => {
        console.log(filteredStatus);
        this.filteredStatus = filteredStatus;
      });
    this.postsService.getPosts().subscribe(posts => {
      console.log(posts[Object.keys(posts)[1]]);
      // for(let i=0;i<posts.length;i++)
      this.allData = posts[Object.keys(posts)[0]];
      this.posts = this.allData;
    });
  }
  getSourceDisplay(name): void {
    this.posts = this.allData.filter(post => post.heading === name);
  }
}
