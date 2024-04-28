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
	did: ''
};

export const TerminusDefaultDomain = 'myterminus.com';
