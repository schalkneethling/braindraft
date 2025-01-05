import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import type { ContentItem } from '$lib/types';

export const ssr = false;

export const load: PageLoad = ({ params }) => {
	let contentItem: ContentItem | undefined;

	try {
		const response = localStorage.getItem('braindrafts');

		if (!response) {
			error(404, 'No content found in storage');
		}

		const contentItems = JSON.parse(response) as ContentItem[];
		contentItem = contentItems.find((contentItem) => contentItem.slug === params.slug);

		if (!contentItem) {
			error(404, `Content item not found: ${params.slug}`);
		}
	} catch (error) {
		throw new Error(`Failed to load content items: ${error}`);
	}

	return { contentItem };
};
