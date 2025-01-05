<script lang="ts">
	import {onMount} from 'svelte';
	import { slide } from 'svelte/transition';

	import type { ContentItem } from '$lib/types';

	import ContentForm from '$lib/ContentForm.svelte';

	let { contentItems }: { contentItems: ContentItem[] } = $props();
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
				{showForm ? 'Hide' : 'Add'} Content Form
			</button>
		</div>
	</header>

	{#if showForm}
		<div transition:slide>
			<ContentForm />
		</div>
	{/if}

	{#if contentItems.length > 0}
		<ul>
			{#each contentItems as contentItem}
				<li>
					<a href={`draft/${contentItem.slug}`}>{contentItem.title}</a>
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
</style>
