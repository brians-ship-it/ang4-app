import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { PasswordValidators } from './password.validator';


@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})

export class ChangePasswordFormComponent {

// doesn't work this way
	// form = new FormGroup({
	// 	oldPassword: new FormControl('', [
	// 			Validators.required, 
	// 			PasswordValidators.checkPassword
	// 		]),
	// 	newPassword: new FormControl('', Validators.required),
	// 	confirmPassword: new FormControl('', Validators.required)
	// }); 

// using the form constructor

	form: FormGroup;
	constructor(fb: FormBuilder) {
		this.form = fb.group({
			oldPassword: ['',
				Validators.required, 
				PasswordValidators.checkPassword
			],
			newPassword: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, {
			validator: PasswordValidators.passwordsShouldMatch
		});
	}


	get oldPassword() {
		return this.form.get('oldPassword');
	}

	get newPassword() {
		return this.form.get('newPassword');
	}

	get confirmPassword() {
		return this.form.get('confirmPassword');
	}


}
