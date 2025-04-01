export interface TerminusInfo {
	terminusName: string;
	wizardStatus: string;
	selfhosted: boolean;
	tailScaleEnable: boolean;
	osVersion: string;
	avatar: string;
	loginBackground: string;
	terminusId: string;
	did: string;
	terminusd: string;
}

export const DefaultTerminusInfo: TerminusInfo = {
	terminusName: '',
	wizardStatus: '',
	selfhosted: false,
	tailScaleEnable: false,
	osVersion: '',
	avatar: '',
	loginBackground: '',
	terminusId: '',
	did: '',
	terminusd: '0'
};

export const compareOlaresVersion = (version0: string, version1: string) => {
	const version0Splits = version0.split('-');
	const version1Splits = version1.split('-');

	const result = {
		compare: 0
	};

	if (version0Splits.length != version1Splits.length) {
		result.compare = version0Splits.length > version1Splits.length ? -1 : 1;
	} else if (version0Splits.length > 1 || version1Splits.length > 1) {
		const v0ISRc = version0Splits[1].startsWith('rc');
		const v1ISRc = version1Splits[1].startsWith('rc');
		if (v0ISRc && v1ISRc) {
			result.compare =
				Number(version0Splits[1].replace('rc.', '')) >
				Number(version1Splits[1].replace('rc.', ''))
					? 1
					: -1;
		} else if (!v0ISRc && !v1ISRc) {
			result.compare =
				Number(version0Splits[1]) > Number(version1Splits[1]) ? 1 : -1;
		} else {
			result.compare = v0ISRc ? 1 : -1;
		}
	}

	const v0Parts = version0Splits[0].split('.').map(Number);
	const v1Parts = version1Splits[0].split('.').map(Number);

	const maxLength = Math.max(v0Parts.length, v1Parts.length);

	while (v0Parts.length < maxLength) {
		v0Parts.push(0);
	}
	while (v1Parts.length < maxLength) {
		v1Parts.push(0);
	}

	for (let i = 0; i < maxLength; i++) {
		if (v0Parts[i] > v1Parts[i]) {
			result.compare = 1;
			break;
		} else if (v0Parts[i] < v1Parts[i]) {
			result.compare = -1;
			break;
		}
	}

	return result;
};

export const TerminusDefaultDomain = 'olares.com';
