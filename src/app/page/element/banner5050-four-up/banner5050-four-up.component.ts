import { Component, OnInit} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-banner5050-four-up',
	templateUrl: './banner5050-four-up.component.html',
	styleUrls: ['./banner5050-four-up.component.css']
})
export class Banner5050FourUpComponent implements OnInit {

	public data:any;
	public imgUrl1:string;
	public imgUrl2:string;
	public imgUrl3:string;
	public imgUrl4:string;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populate(data) {
		this.data = data;
		this.imgUrl1 = environment.apiBase + 'file/' + data.image1;
		this.imgUrl2 = environment.apiBase + 'file/' + data.image2;
		this.imgUrl3 = environment.apiBase + 'file/' + data.image3;
		this.imgUrl4 = environment.apiBase + 'file/' + data.image4;
	}	

}
