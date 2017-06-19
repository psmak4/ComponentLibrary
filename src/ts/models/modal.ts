export class Modal {
	modalDom: Element;
	
	constructor(modalId: string) {
		this.modalDom = document.querySelector(modalId);
		this.RegisterClosers(modalId);
		this.RegisterOpeners(modalId);
	}

	private RegisterClosers = (modalId: string) => {
		let closers: NodeListOf<Element> = document.querySelectorAll(modalId + ' [data-modal-close]');
		for (let i: number = 0; i < closers.length; i++) {
			closers[i].addEventListener('click', this.Close, false);
		}
	}

	private RegisterOpeners = (modalId: string) => {
		let openers: NodeListOf<Element> = document.querySelectorAll('[data-modal-open="' + modalId + '"]');
		for (let i: number = 0; i < openers.length; i++) {
			openers[i].addEventListener('click', this.Open, false);
		}
	}

	public Open = (event: Event) => {
		if (event)
			event.preventDefault();
		
		this.modalDom.classList.remove('modal--hidden');
	}

	public Close = (event: Event) => {
		if (event)
			event.preventDefault();
		
		this.modalDom.classList.add('modal--hidden');
	}
}
