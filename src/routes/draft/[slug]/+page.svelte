<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { contentItem } = data;
</script>

<h1>{contentItem.title}</h1>
