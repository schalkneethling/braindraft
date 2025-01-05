export const titleToSlug = (title: string) => {
	const nonWordMatcher = /[^\w]+/g;
	let formatted = title.toLowerCase().replace(nonWordMatcher, '-');

	if (formatted.startsWith('-')) {
		formatted = formatted.slice(1);
	}

	if (formatted.endsWith('-')) {
		formatted = formatted.slice(0, -1);
	}

	return formatted;
};
