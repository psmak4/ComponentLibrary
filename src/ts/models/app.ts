import * as Collections from 'typescript-collections';
import { Modal } from './modal';

export class App {
	private Modals: Array<Modal>;
	
	constructor() {
		this.RegisterModals();
	}

	private RegisterModals = () => {
		this.Modals = new Array<Modal>();
		let modals: NodeListOf<Element> = document.querySelectorAll('.modal');
		for (let i: number = 0; i < modals.length; i++) {
			this.Modals.push(new Modal('#' + modals[i].id));
		}
	}
}
