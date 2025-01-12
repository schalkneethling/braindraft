<script lang="ts">
	import type { DraftItem } from '$lib/types';

	const { draft }: { draft: DraftItem } = $props();
	console.log(draft);
</script>

<div class="draft-card">
	<ul class="reset-list draft-meta">
		{#if draft.draftStatus}
			<li class={`draft-meta-entry draft-status-${draft.draftStatus.toLowerCase()}`}>
				{draft.draftStatus}
			</li>
		{/if}

		{#if draft.draftType}
			<li class="draft-meta-entry draft-type">
				{draft.draftType}
			</li>
		{/if}
	</ul>

	<a href={`draft/${draft.slug}`}>
		<h2 class="heading-small-medium draft-title">{draft.title}</h2>
	</a>

	{#if draft.publishDate}
		<time datetime={draft.publishDate}>{draft.publishDate}</time>
	{/if}

	<div class="draft-actions">
		<button class="button outline critical">Delete</button>
		<button class="button outline">Edit</button>
	</div>
</div>

<style>
	.draft-card {
		background-color: var(--color-slate-050);
		padding: var(--size-24);
	}

	.draft-meta {
		display: flex;
		gap: var(--size-16);
	}

	.draft-meta-entry {
		border: var(--size-1) solid var(--color-neutral-80);
		border-radius: var(--size-4);
		padding-block: var(--size-4);
		padding-inline: var(--size-8);
	}

	.draft-status-draft {
		background-color: var(--color-emerald-050);
		border-color: var(--color-emerald-900);
		color: var(--color-emerald-900);
	}

	.draft-title {
		margin-block-end: var(--size-12);
	}

	.draft-actions {
		display: flex;
		gap: var(--size-16);
		margin-block-start: var(--size-12);
	}

	.draft-actions button {
		flex: 1;
		max-inline-size: unset;
	}
</style>
