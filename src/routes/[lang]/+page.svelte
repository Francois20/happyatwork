<script>
	import BlockHandler from "$lib/components/BlockHandler.svelte";
  export let data;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<BlockHandler {data} />
