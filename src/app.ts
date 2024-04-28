export interface TerminusEntrance {
	id: string;
	name: string;
	title: string;
	url: string;
	icon?: string;
	authLevel: string;
	invisible?: boolean;
	openMethod: string;
}

export interface TerminusApp {
	id: string;
	icon: string;
	isClusterScoped: boolean;
	isSysApp: boolean;
	name: string;
	namespace?: string;
	target: string;
	owner?: string;
	title: string;
	url?: string;
	state: string;
	deployment?: string;
	entrances: TerminusEntrance[];
}
