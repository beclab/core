import { compare, valid } from 'semver';

describe('semver版本比较测试', () => {
	test('语义版本号检测', () => {
		expect(valid('1.12.0')).toBe('1.12.0');
		expect(valid('a.b.c')).toBe(null);
		expect(valid('v123123')).toBe(null);
	});

	test('基础版本号比较', () => {
		expect(compare('1.12.0', '1.12.1')).toBe(-1);
		expect(compare('1.12.1', '1.12.1')).toBe(0);
		expect(compare('1.12.2', '1.12.1')).toBe(1);
		expect(compare('1.13.3', '1.12.123')).toBe(1);
	});

	test('预发布版本比较', () => {
		expect(compare('1.12.0-alpha.1', '1.12.0-beta.1')).toBe(-1);
		expect(compare('1.12.0-alpha.1', '1.12.0-alpha.beta')).toBe(-1);
		expect(compare('1.12.0-rc.1', '1.12.0-beta.1')).toBe(1);
		expect(compare('1.12.0-rc.2', '1.12.0-rc.1')).toBe(1);
	});

	test('daily build版本比较', () => {
		expect(compare('1.12.0-20250310', '1.12.0-20250311')).toBe(-1);
		expect(compare('1.12.0-20250312', '1.12.0-20250311')).toBe(1);
		expect(compare('1.12.0-20250312', '1.12.0-0')).toBe(1);
		expect(compare('1.12.1-20250312', '1.12.0-20250312')).toBe(1);
		expect(compare('1.12.1-20250312', '1.12.1-20250312')).toBe(0);
	});

	test('正式版本-rc比较', () => {
		expect(compare('1.12.0', '1.12.0-rc.1')).toBe(1);
		expect(compare('1.12.0', '1.12.1-rc.1')).toBe(-1);
	});

	test('dailybuild版本-预发版本比较', () => {
		expect(compare('1.12.1-20250312', '1.12.0-rc.1')).toBe(1);
		expect(compare('1.12.0-20250312', '1.12.0-rc.1')).toBe(-1);
		expect(compare('1.12.0-20250312', '1.12.0-beta.1')).toBe(-1);
		expect(compare('1.12.0-20250312', '1.12.0-alpha.1')).toBe(-1);
	});
	// 1.0.0-20250729<1.0.0-20250730<1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0 < 1.0.1-20250730 < 1.0.1
	test('总体测试', () => {
		expect(compare('1.0.0-20250729', '1.0.0-20250730')).toBe(-1);
		expect(compare('1.0.0-20250730', '1.0.0-alpha')).toBe(-1);
		expect(compare('1.0.0-alpha', '1.0.0-alpha.1')).toBe(-1);
		expect(compare('1.0.0-alpha.1', '1.0.0-alpha.beta')).toBe(-1);
		expect(compare('1.0.0-alpha.beta', '1.0.0-beta')).toBe(-1);
		expect(compare('1.0.0-beta', '1.0.0-beta.2')).toBe(-1);
		expect(compare('1.0.0-beta.2', '1.0.0-beta.11')).toBe(-1);
		expect(compare('1.0.0-beta.11', '1.0.0-rc.1')).toBe(-1);
		expect(compare('1.0.0-rc.1', '1.0.0')).toBe(-1);
		expect(compare('1.0.0', '1.0.1-20250730')).toBe(-1);
	});
});
