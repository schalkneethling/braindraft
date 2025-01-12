<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { DraftItem } from '$lib/types';

	import Card from '$lib/Card.svelte';
	import DraftForm from '$lib/DraftForm.svelte';

	let { draftItems }: { draftItems: DraftItem[] } = $props();
	let showForm = $state(false);

	onMount(() => {
		document.addEventListener('keyup', (event) => {
			if (event.key === 'Escape') {
				showForm = false;
			}
		});
	});
</script>

<article>
	<header class="content-header">
		<h2>Your Brain Drafts</h2>

		<div class="button-wrapper">
			<button class="button outline" type="button" onclick={() => (showForm = !showForm)}>
				{showForm ? 'Hide' : 'Add'} Draft Form
			</button>
		</div>
	</header>

	{#if showForm}
		<div transition:slide>
			<DraftForm />
		</div>
	{/if}

	{#if draftItems.length > 0}
		<ul class="reset-list draft-list">
			{#each draftItems as draftItem}
				<li class="draft-list-entry">
					<Card draft={draftItem} />
				</li>
			{/each}
		</ul>
	{:else}
		<p>No drafts found.</p>
	{/if}
</article>

<style>
	h2 {
		margin: 0;
	}

	.content-header {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.draft-list {
		display: flex;
		gap: var(--size-16);
		margin-block-start: var(--size-32);
	}

	.draft-list-entry {
		flex: 1 1 calc(100vw / 4);
	}
</style>
