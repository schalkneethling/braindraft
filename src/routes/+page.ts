import type { PageLoad } from './$types';
import type { ContentItem } from '$lib/types';

export const ssr = false;

export const load: PageLoad = () => {
	let contentItems = [] as ContentItem[];

	try {
		const response = localStorage.getItem('braindrafts');

		if (response) {
			const parsedResponse = JSON.parse(response);
			contentItems = Object.entries(parsedResponse).map(([, value]) => value) as ContentItem[];
		}
	} catch (error) {
		throw new Error(`Failed to load content items: ${error}`);
	}

	return { contentItems };
};
