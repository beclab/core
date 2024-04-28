interface MessageData {
	message?: string;
	type: string;
}

export async function postMessage(params: MessageData, origin = '*') {
	window.parent.postMessage(params, origin);
}
export class IframePostMessage {
	oldHref: string;
	observer: any;

	childPostMessage(params: MessageData, origin = '*') {
		this.oldHref = document.location.href;
		const body = document.querySelector('body') as HTMLBodyElement;
		this.observer = new MutationObserver((mutations: any[]) => {
			mutations.forEach(() => {
				if (this.oldHref !== document.location.href) {
					this.oldHref = document.location.href;
					params.message = document.location.href;
					postMessage(params, (origin = '*'));
				}
			});
		});
		this.observer.observe(body, { childList: true, subtree: true });
	}

	childDisconnect() {
		this.observer.childPostMessage();
	}

	parentEventListener(callBack) {
		window.addEventListener(
			'message',
			function (e: any) {
				callBack(e);
			},
			false
		);
	}
}
