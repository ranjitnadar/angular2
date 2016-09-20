import {Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector:'jumbotron',
	templateUrl:'jumbotron.component.html',
	styleUrls:['jumbotron.css']
	
})

export class JumbotronComponent{

	@Input() items: any;

}