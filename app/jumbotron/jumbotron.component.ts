import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector:'jumbotron',
	templateUrl:'jumbotron.component.html',
	styleUrls:['jumbotron.css']
})

export class JumbotronComponent{
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;
	constructor(){
		this.jbtHeading ='Welcome to home page';
		this.jbtText = 'This is home page ';
		this.jbtBtnText = 'Readmore...';
		this.jbtBtnUrl = 'http://localhost:3000';
	}
}