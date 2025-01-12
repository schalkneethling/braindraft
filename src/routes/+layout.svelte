<script lang="ts">
	import Header from '$lib/Header.svelte';

	import '../styles/minimalist/minimalist.css';
	import '../styles/braindraft.css';

	let { children } = $props();
</script>

<div class="app-container">
	<Header />

	{@render children()}
</div>
