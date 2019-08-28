import { Injectable } from '@angular/core';

import { Posts } from './posts';
import { POSTSDATA } from './posts-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	popup: Posts[];
	filteredData: Posts[];
	post: Posts;
	// public eventClicked = new Subject<Event>();
	public popUpData = new Subject<Posts[]>();
	constructor(private router: Router, private http: HttpClient) {}

	getSelectedPost(name: string): Posts[] {
		return POSTSDATA.filter((post) => post.heading === name);
	}
	addPost(addPost: Posts): void {
		this.post = addPost;
	}
	addPopUp() {
		return this.http.get('https://newsfeed-6ee3e.firebaseio.com/posts.json');
	}
	createPost() {
		return this.http.post('https://newsfeed-6ee3e.firebaseio.com/posts.json', this.post);
	}
	getPosts() {
		return this.http.get('https://newsfeed-6ee3e.firebaseio.com/posts.json');
	}
}
