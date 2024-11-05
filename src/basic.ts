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

export const TerminusDefaultDomain = 'olares.com';
