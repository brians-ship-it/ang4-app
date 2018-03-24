import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
  	if (!value) return null;

  	// let prepositions = [
  	// 	'of',
  	// 	'the'
  	// ];
  	
  	let words = value.split(' ');
  	for (var i = 0; i < words.length; i++) {
  		// if (i > 0 && prepositions.includes(words[i].toLowerCase()))
  		let word = words[i];
  		if (i > 0 && this.isPreposition(word))
  			words[i] = word.toLowerCase();
  		else 
  			// words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
  			words[i] = this.toTitleCase(word);
  	}

  	return words.join(' ');
  }
  // refactoring above code 
  private isPreposition(word: string): boolean {
  	let prepositions = [
  		'of',
  		'the'
  	];

  	return prepositions.includes(word.toLowerCase())
  }

  private toTitleCase(word: string): string {
  	return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
