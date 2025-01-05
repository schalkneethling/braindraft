<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { draftItem } = data;
</script>

<h1>{draftItem.title}</h1>
