import { Header } from './header';
import { Modal } from './modal';
import { Nav } from './nav';

export class App {
	private Modals: Array<Modal>;
	private Headers: Array<Header>;
	private Navs: Array<Nav>;
	
	constructor() {
		this.RegisterHeaders();
		this.RegisterModals();
		this.RegisterNavs();
	}

	private RegisterModals = () => {
		this.Modals = new Array<Modal>();
		let modals: NodeListOf<Element> = document.querySelectorAll('.modal');
		for (let i: number = 0; i < modals.length; i++) {
			this.Modals.push(new Modal('#' + modals[i].id));
		}
		console.log('modal count', this.Modals.length);
	}

	private RegisterHeaders = () => {
		this.Headers = new Array<Header>();
		let headers: NodeListOf<Element> = document.querySelectorAll('.header');
		for (let i: number = 0; i < headers.length; i++) {
			this.Headers.push(new Header('#' + headers[i].id));
		}
		console.log('header count', this.Headers.length);
	}

	private RegisterNavs = () => {
		this.Navs = new Array<Nav>();
		let navs: NodeListOf<Element> = document.querySelectorAll('.nav');
		for (let i: number = 0; i < navs.length; i++) {
			this.Navs.push(new Nav('#' + navs[i].id));
		}
		console.log('nav count', this.Navs.length);
	}
}
