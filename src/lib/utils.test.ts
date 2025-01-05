import { expect, test } from 'vitest';
import { titleToSlug } from './utils';

test('returns a slugified version of the title', () => {
	expect(titleToSlug('Hello World')).toBe('hello-world');
	expect(titleToSlug('Hello, World!!!!')).toBe('hello-world');
	expect(titleToSlug('!! !!Hello, World!!!!')).toBe('hello-world');
});
