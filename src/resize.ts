let mobileChangeCallback:
	| ((state: { isMobile: boolean; isVerticalScreen: boolean }) => void)
	| null = null;

const MOBILE_KEYWORDS = [
	'phone',
	'pad',
	'pod',
	'iphone',
	'ipod',
	'ios',
	'ipad',
	'android',
	'mobile',
	'blackberry',
	'iemobile',
	'mqqbrowser',
	'juc',
	'fennec',
	'wosbrowser',
	'browserng',
	'webos',
	'symbian',
	'windows phone'
];

export function useMobile(): {
	state: { isMobile: boolean; isVerticalScreen: boolean };
	cleanup: () => void;
} {
	let state = getScreenState();

	const resizeHandler = () => {
		const newState = getScreenState();
		if (
			newState.isMobile !== state.isMobile ||
			newState.isVerticalScreen !== state.isVerticalScreen
		) {
			state = newState;
			if (mobileChangeCallback) {
				mobileChangeCallback(state);
			}
		}
	};

	window.addEventListener('resize', resizeHandler);

	const cleanup = () => {
		window.removeEventListener('resize', resizeHandler);
	};

	return { state, cleanup };
}

function getScreenState(): { isMobile: boolean; isVerticalScreen: boolean } {
	const isMobile = mobileCheckout();
	const isVerticalScreen = window.innerHeight > window.innerWidth;
	return { isMobile, isVerticalScreen };
}

function mobileCheckout(): boolean {
	if (isDesktop()) {
		return false;
	}

	const ratio =
		screen.height > screen.width
			? screen.height / screen.width
			: screen.width / screen.height;

	if (ratio >= 1.3 && ratio <= 1.6) {
		return false;
	}
	return true;
}

function isDesktop(): boolean {
	const userAgent = navigator.userAgent.toLowerCase();
	const hasKeywords = MOBILE_KEYWORDS.some((keyword) =>
		userAgent.includes(keyword)
	);
	if (hasKeywords) {
		return false;
	}
	return true;
}

export function onMobileChange(
	callback: (state: { isMobile: boolean; isVerticalScreen: boolean }) => void
) {
	mobileChangeCallback = callback;
}
