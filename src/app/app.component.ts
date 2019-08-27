import { Component } from '@angular/core';
import { Posts } from './posts';
import { PostsService } from './posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'task6';
	public name: string;
	constructor(private postsService: PostsService, private router: Router) {}
	childEventClicked(event: Event) {
		this.name = (<HTMLInputElement>event.target).value;
		this.postsService.getSelectedPost(this.name);
		this.router.navigate([ '/', this.name ]);
	}
}
