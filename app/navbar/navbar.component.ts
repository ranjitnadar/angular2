import {Component} from '@angular/core';

@Component({
	moduleId:module.id,
	selector:'navbar',
	templateUrl:'navbar.component.html',
	styleUrls:['navbar.css']
})

export class NavbarComponent{
	private projectName:string;
	constructor(){
		this.projectName = 'Awesome Site';
	}
}