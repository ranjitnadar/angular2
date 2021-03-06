import {Component} from '@angular/core';

export class Items{
	title:string;
	description:string;
	pageUrl:string;
	pageBtn:string;
}

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.html'
})

export class HomeComponent{
	


	items:Items = { 
		title: 'Home Page', 
		description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
		pageUrl: '/', 
		pageBtn: 'readmore...'
	};
}