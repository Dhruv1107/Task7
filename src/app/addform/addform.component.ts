import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { POSTSDATA } from '../posts-data';
import { PostsService } from '../posts.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
	selector: 'app-addform',
	templateUrl: './addform.component.html',
	styleUrls: [ './addform.component.css' ]
})
export class AddformComponent implements OnInit {
	fields = [ 'heading', 'date', 'image', 'content', 'popup' ];
	constructor(public postsService: PostsService, private router: Router) {}

	ngOnInit() {}

	profileForm = new FormGroup({
		id: new FormControl(POSTSDATA[POSTSDATA.length - 1].id + 1),
		heading: new FormControl('', Validators.required),
		date: new FormControl('', Validators.required),
		image: new FormControl('', Validators.required),
		content: new FormControl('', Validators.required),
		popup: new FormControl('', Validators.required)
	});

	onSubmit(): void {
		this.postsService.addPost(this.profileForm.value);
		this.router.navigate([ '/' ]);
	}
}
