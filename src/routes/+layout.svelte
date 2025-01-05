<script lang="ts">
	import Header from '$lib/Header.svelte';

	import '../styles/minimalist/minimalist.css';

	let { children } = $props();
</script>

<div class="readable-line-length">
	<Header />

	{@render children()}
</div>
