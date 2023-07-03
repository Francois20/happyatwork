<script>
	import BlockHandler from "$lib/components/BlockHandler.svelte";
  export let data;
  const {title, description, ogTitle, ogDescription, ogImage} = data.page.seo

</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content="{title}">
  <meta name="description" content="{description}">
  <meta property="og:title" content="{ogTitle}">
  <meta property="og:description" content="{ogDescription}">
  <meta property="og:image" content="{ogImage}">
</svelte:head>

<BlockHandler {data} />
