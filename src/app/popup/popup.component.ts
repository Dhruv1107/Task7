import { Component, OnInit, DoCheck } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: [ './popup.component.css' ]
})
export class PopupComponent implements OnInit {
	displayPopUp: Posts;
	constructor(private postsService: PostsService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.getPopUp(params.id);
		});
	}
	getPopUp(id: number) {
		this.postsService.addPopUp().subscribe((posts) => {
			Object.keys(posts).forEach((key) => {
				console.log(id);
				if (posts[key].id == id) this.displayPopUp = posts[key];
			});
		});
	}
}
