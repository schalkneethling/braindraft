import type { PageLoad } from './$types';
import type { DraftItem } from '$lib/types';

export const ssr = false;

export const load: PageLoad = () => {
	let draftItems = [] as DraftItem[];

	try {
		const response = localStorage.getItem('braindrafts');

		if (response) {
			draftItems = JSON.parse(response);
		}
	} catch (error) {
		throw new Error(`Failed to load draft items: ${error}`);
	}

	return { draftItems };
};
