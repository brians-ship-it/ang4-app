import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

	categories = [
		{ id:1, name: 'Art'},
		{ id:2, name: 'Angular4'},
		{ id:3, name: 'Music'}
	];

	submit(form) {
		console.log(form);
	}

}
