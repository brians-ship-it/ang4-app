import { AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {
	static checkPassword(control: AbstractControl) {
		return new Promise((resolve) => {
			setTimeout(() => {
				if(control.value !== '1234')
					resolve({ checkPassword: true });
				else 
					resolve(null);
			}, 2000)
		});
	}

	static passwordsShouldMatch(control: AbstractControl) {
		let newPassword = control.get('newPassword');
		let confirmPassword = control.get('confirmPassword');

		if (newPassword.value !== confirmPassword.value) 
			return { passwordsShouldMatch: true };
		else
			return null;
			// return { passwordsShouldMatch: false };
	}
}