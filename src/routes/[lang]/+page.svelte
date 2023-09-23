<script>
	import BlockHandler from "$lib/components/BlockHandler.svelte";
  import { urlFor } from "../../sanityClient";
  export let data;
  const {title, description, ogTitle, ogDescription, ogImage} = data.page.seo

</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content="{title}">
  <meta name="description" content="{description}">
  <meta property="og:title" content="{ogTitle}">
  <meta property="og:description" content="{ogDescription}">
  <meta property="og:image" content="{ogImage ? urlFor(ogImage).width(1200).height(630).url() : ''}">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91434214-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-91434214-3');
</script>
</svelte:head>

<BlockHandler {data} />
