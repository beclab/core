const rule = new RegExp('^[a-z0-9]{4,}$');
export function getTerminusNameFromVC(type: string, name: string): string {
	if (type == 'Google') {
		const s = name.split('@');
		if (s.length != 2) {
			return undefined;
		}
		if (
			s[1] != 'gmail.com' &&
			s[1] != 'bytetrade.io' &&
			s[1] != 'bytetradelab.io'
		) {
			return undefined;
		}
		const n = s[0].toLocaleLowerCase();
		if (!rule.test(n)) {
			return undefined;
		}
		if (n.length < 4 || n.length > 63) {
			return undefined;
		}
		return n;
	} else if (type == 'Twitter') {
		const n = name.toLocaleLowerCase();
		if (!rule.test(n)) {
			return undefined;
		}
		if (n.length < 4 || n.length > 63) {
			return undefined;
		}
		return n;
	} else {
		return undefined;
	}
}

const keyword = [
	'user',
	'system',
	'space',
	'default',
	'os',
	'kubesphere',
	'kube',
	'kubekey',
	'kubernetes',
	'gpu',
	'tapr',
	'bfl',
	'bytetrade',
	'project',
	'pod'
];

export function isWordMatchTerminusKeyword(word: string): boolean {
	if (keyword.indexOf(word.toLocaleLowerCase()) < 0) {
		return false;
	}
	return true;
}
