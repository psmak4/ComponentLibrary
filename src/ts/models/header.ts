export class Header {
	headerDom: Element;
	
	constructor(headerId: string) {
		this.headerDom = document.querySelector(headerId);
	}
}
