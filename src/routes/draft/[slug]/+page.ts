import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import type { DraftItem } from '$lib/types';

export const ssr = false;

export const load: PageLoad = ({ params }) => {
	let draftItem: DraftItem | undefined;

	try {
		const response = localStorage.getItem('braindrafts');

		if (!response) {
			error(404, 'No content found in storage');
		}

		const contentItems = JSON.parse(response) as DraftItem[];
		draftItem = contentItems.find((contentItem) => contentItem.slug === params.slug);

		if (!draftItem) {
			error(404, `Content item not found: ${params.slug}`);
		}
	} catch (error) {
		throw new Error(`Failed to load content items: ${error}`);
	}

	return { draftItem };
};
