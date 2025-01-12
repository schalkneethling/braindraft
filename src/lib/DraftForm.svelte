<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import type { DraftItemsContext } from '$lib/types';

	const context = getContext('draftItems') as DraftItemsContext;

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		const target = event.target as HTMLFormElement;

		context.addDraftItem(new FormData(target));
	};

	onMount(() => {
		const form = document.getElementById('content-form') as HTMLFormElement;

		form.addEventListener('submit', handleSubmit);

		return () => {
			form.removeEventListener('submit', handleSubmit);
		};
	});
</script>

<form aria-labelledby="content-form-legend" id="content-form" name="content-form" method="post">
	<fieldset class="no-border">
		<legend class="visually-hidden" id="content-form-legend">Start planning your content</legend>

		<div class="form-field">
			<label for="content-title">Title</label>
			<input type="text" id="content-title" name="content-title" required />
		</div>

		<div class="form-field">
			<label for="content-publish-date">Planned publishing date</label>
			<input type="date" id="content-publish-date" name="content-publish-date" required />
		</div>

		<div class="form-field">
			<label for="content-status">Status</label>
			<select id="content-status" name="content-status">
				<option value="draft">Draft</option>
				<option value="scheduled">Scheduled</option>
				<option value="published">Published</option>
			</select>
		</div>

		<div class="form-field">
			<label for="content-type">Content type</label>
			<select id="content-type" name="content-type">
				<option value="blog">Blog</option>
				<option value="newsletter">Newsletter</option>
				<option value="podcast-episode">Podcast Episode</option>
				<option value="video">Video</option>
			</select>
		</div>

		<div class="form-field">
			<label for="content-tags">Tags (comma separated)</label>
			<input type="text" id="content-tags" name="content-tags" />
		</div>

		<div class="form-field">
			<label for="content-notes">Notes and Planing</label>
			<textarea id="content-notes" name="content-notes" required></textarea>
		</div>
	</fieldset>

	<div class="form-actions">
		<button class="button outline" type="reset">Cancel</button>
		<button class="button solid" type="submit">Save</button>
	</div>
</form>
