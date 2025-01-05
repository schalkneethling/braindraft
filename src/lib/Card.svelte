<script lang="ts">
	import type { DraftItem } from '$lib/types';

	const { draft }: { draft: DraftItem } = $props();
</script>

<div class="draft-card">
	<ul class="draft-meta">
		{#if draft.draftStatus}
			<li class={`draft-status status-${draft.draftStatus.toLowerCase()}`}>
				{draft.draftStatus}
			</li>
		{/if}

		{#if draft.draftType}
			<li class="draft-type">
				{draft.draftType}
			</li>
		{/if}
	</ul>

	<a href={`draft/${draft.slug}`}>
		<h2 class="heading-small-mediium">{draft.title}</h2>
	</a>

	{#if draft.publishDate}
		<time datetime={draft.publishDate}>{draft.publishDate}</time>
	{/if}

	<div class="draft-actions">
		<button class="button outline critical">Delete</button>
		<button class="button outline">Edit</button>
	</div>
</div>
