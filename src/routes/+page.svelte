<script lang="ts">
	import type { PageData } from './$types';
	import type { ContentItem, ContentItemsContext } from '$lib/types';

	import { setContext } from 'svelte';

	import Content from '$lib/Content.svelte';

	let { data }: { data: PageData } = $props();
	let contentItems = $state(data.contentItems);

	const getContentItemData = (contentItem: FormData): ContentItem => {
		const tagsRaw = contentItem.get('content-tags') as string;
		const tags = tagsRaw.split(',').map((tag) => tag.trim());

		return {
			contentStatus: contentItem.get('content-status') as string,
			contentType: contentItem.get('content-type') as string,
			notes: contentItem.get('content-notes') as string,
			publishDate: contentItem.get('content-publish-date') as string,
			title: contentItem.get('content-title') as string,
			tags
		};
	};

	const addContentItem = (contentItem: FormData): void => {
		const contentItemData = getContentItemData(contentItem);
		contentItems = [...contentItems, contentItemData];
		localStorage.setItem('braindrafts', JSON.stringify(contentItems));
	};

	setContext('contentItems', { addContentItem } as ContentItemsContext);
</script>

<main>
	<Content {contentItems} />
</main>
