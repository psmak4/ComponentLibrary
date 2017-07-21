export class Nav {
	navDom: Element;
	
	constructor(navId: string) {
		this.navDom = document.querySelector(navId);
		this.RegisterToggles(navId);
	}

	private RegisterToggles = (navId: string) => {
		let toggles: NodeListOf<Element> = document.querySelectorAll('[data-nav-toggle="' + navId + '"]');
		for (let i: number = 0; i < toggles.length; i++) {
			toggles[i].addEventListener('click', this.Toggle, false);
		}
	}

	public Toggle = (event: Event) => {
		if (event)
			event.preventDefault();
		
		this.navDom.classList.toggle('nav--hidden');
	}

	private RegisterOpeners = (navId: string) => {
		let openers: NodeListOf<Element> = document.querySelectorAll('[data-nav-open="' + navId + '"]');
		for (let i: number = 0; i < openers.length; i++) {
			openers[i].addEventListener('click', this.Open, false);
		}
	}

	public Open = (event: Event) => {
		if (event)
			event.preventDefault();
		
		this.navDom.classList.remove('nav--hidden');
	}

	private RegisterClosers = (navId: string) => {
		let closers: NodeListOf<Element> = document.querySelectorAll('[data-nav-close="' + navId + '"]');
		for (let i: number = 0; i < closers.length; i++) {
			closers[i].addEventListener('click', this.Close, false);
		}
	}

	public Close = (event: Event) => {
		if (event)
			event.preventDefault();
		
		this.navDom.classList.add('modal--hidden');
	}
}
