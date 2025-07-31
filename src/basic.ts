import * as semver from 'semver';
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

export interface OlaresInfo {
	olaresName: string;
	wizardStatus: string;
	selfhosted: boolean;
	tailScaleEnable: boolean;
	osVersion: string;
	loginBackground: string;
	avatar: string;
	olaresId: string;
	did: string;
	olaresd: string;
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

export const DefaultOlaresInfo: OlaresInfo = {
	olaresName: '',
	wizardStatus: '',
	selfhosted: false,
	tailScaleEnable: false,
	osVersion: '',
	avatar: '',
	loginBackground: '',
	olaresId: '',
	did: '',
	olaresd: '0'
};

export const compareOlaresVersion = (version0: string, version1: string) => {
	if (!semver.valid(version0) || !semver.valid(version1)) {
		return {
			compare: 0
		};
	}

	const result = {
		compare: 0
	};
	result.compare = semver.compare(version0, version1);
	return result;
};

export const TerminusDefaultDomain = 'olares.com';
export const OlaresDefaultDomain = 'olares.com';
