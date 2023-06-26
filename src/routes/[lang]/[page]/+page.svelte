<script>
	import BlockHandler from "$lib/components/BlockHandler.svelte";
  export let data;

</script>

<svelte:head>
	<title>{data.page.seo.title}</title>
	<meta name="description" content={data.page.seo.description} />
</svelte:head>

<BlockHandler {data} />