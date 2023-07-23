<script>
  import PortableText from "$lib/portableText/PortableText.svelte";
  export let data;
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding pt-24 pb-12 md:pt-52 md:pb-24 max-w-content w-full">
  <PortableText data={data.text}/>
</section>