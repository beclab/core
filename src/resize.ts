export enum DeviceType {
	MOBILE = 'mobile',
	TABLET = 'tablet',
	DESKTOP = 'desktop'
}

let deviceChangeCallback:
	| ((state: { device: DeviceType; isVerticalScreen: boolean }) => void)
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

export function useDevice(): {
	state: { device: DeviceType; isVerticalScreen: boolean };
	cleanup: () => void;
} {
	let state = getScreenState();
	const mediaOrientation = window.matchMedia('(orientation: landscape)');

	const resizeHandler = () => {
		const newState = getScreenState();
		if (
			newState.device !== state.device ||
			newState.isVerticalScreen !== state.isVerticalScreen
		) {
			state = newState;
			if (deviceChangeCallback) {
				deviceChangeCallback(state);
			}
		}
	};

	window.addEventListener('resize', resizeHandler);
	mediaOrientation.addEventListener('change', resizeHandler);

	const cleanup = () => {
		window.removeEventListener('resize', resizeHandler);
		mediaOrientation.addEventListener('change', resizeHandler);
	};

	return { state, cleanup };
}

function getScreenState(): { device: DeviceType; isVerticalScreen: boolean } {
	const device = detectDevice();
	const isVerticalScreen = window.innerHeight > window.innerWidth;
	return { device, isVerticalScreen };
}

function detectDevice(): DeviceType {
	if (isDesktop()) {
		const isTouchDevice =
			'ontouchstart' in window || navigator.maxTouchPoints > 0;
		if (isTouchDevice) {
			return DeviceType.TABLET;
		}

		return DeviceType.DESKTOP;
	}

	if (isSamsungDevice()) {
		return DeviceType.MOBILE;
	}

	const ratio =
		screen.height > screen.width
			? screen.height / screen.width
			: screen.width / screen.height;

	if (ratio >= 1.3 && ratio <= 1.6) {
		return DeviceType.TABLET;
	}

	return DeviceType.MOBILE;
}

function isSamsungDevice() {
	const userAgent = navigator.userAgent.toLowerCase();
	const isAndroid = /android/i.test(userAgent);
	const isSamsung = /samsung|sm-|gt-/i.test(userAgent);
	return isAndroid && isSamsung;
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

export function onDeviceChange(
	callback: (state: { device: DeviceType; isVerticalScreen: boolean }) => void
) {
	deviceChangeCallback = callback;
}
