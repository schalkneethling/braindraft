<script lang="ts">
	import { setContext } from 'svelte';

	import type { PageData } from './$types';
	import type { DraftItem, DraftItemsContext } from '$lib/types';

	import {titleToSlug} from '$lib/utils';
	import Draft from '$lib/Draft.svelte';

	let { data }: { data: PageData } = $props();
	let draftItems = $state(data.draftItems);

	const getDraftItemData = (draftItem: FormData): DraftItem => {
		const tagsRaw = draftItem.get('content-tags') as string;
		const tags = tagsRaw.split(',').map((tag) => tag.trim());
		const title = draftItem.get('content-title') as string;

		return {
			draftStatus: draftItem.get('content-status') as string,
			draftType: draftItem.get('content-type') as string,
			notes: draftItem.get('content-notes') as string,
			publishDate: draftItem.get('content-publish-date') as string,
			slug: titleToSlug(title),
			title,
			tags
		};
	};

	const addDraftItem = (draftItem: FormData): void => {
		const draftItemData = getDraftItemData(draftItem);
		draftItems = draftItems ? [...draftItems, draftItemData] : [draftItemData];
		localStorage.setItem('braindrafts', JSON.stringify(draftItems));
	};

	setContext('draftItems', { addDraftItem } as DraftItemsContext);
</script>

<main>
	<Draft {draftItems} />
</main>
