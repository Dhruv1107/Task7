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
	post: Posts;
	image: string;
	popUp: string;
	displayPopUp: Posts[];
	constructor(private postsService: PostsService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.getPopUp(params.id);
		});
	}
	getPopUp(id: number) {
		this.displayPopUp = this.postsService.addPopUp(id);
	}
}
