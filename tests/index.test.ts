import { getTerminusNameFromVC } from '../src/index';

describe('testing index file', () => {
	test('empty string should result in zero', () => {
		expect(getTerminusNameFromVC('Google', 'pengpeng@gmail.com')).toBe(
			'pengpeng'
		);
		expect(getTerminusNameFromVC('Google', 'pengpeng.a@gmail.com')).toBe(
			'pengpenga'
		);
		expect(getTerminusNameFromVC('Google', 'a.a.a@gmail.com')).toBe(undefined);
		expect(getTerminusNameFromVC('Google', '.a.a-a.a.@gmail.com')).toBe('aaaa');
		expect(getTerminusNameFromVC('Google', '.a.a-a.a.@gmail.com')).toBe('aaaa');
		expect(getTerminusNameFromVC('Google', 'azngpeng.1@gmail.com')).toBe(
			'azngpeng1'
		);
	});
});
