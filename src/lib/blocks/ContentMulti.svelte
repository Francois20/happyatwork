<script>
  import Image from "$lib/components/Image.svelte";
	import Link from "$lib/components/Link.svelte";
	import PortableText from "$lib/portableText/PortableText.svelte";

  export let data;
 
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding py-8 md:py-16 w-full max-w-content">
  {#each data.items as item, i}
    <div class="flex flex-col mb-16 lg:mb-28 {i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}">
      <div class="w-full lg:w-2/3 mb-8 lg:mb-0 {i % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24'}">
        {#if item.tag}
          <span class="block text-marine opacity-50 text-base md:text-lg font-bold mb-2 uppercase">{item.tag}</span>
        {/if}
        <h2 class="text-2xl md:text-4xl font-bold mb-4 uppercase xl:max-w-[86%]">{item.title}</h2>
        <PortableText data={item.text} />
        {#if item.link && (item.link.externalLink || item.link.internalLink)}
          <Link link={item.link} />
        {/if}
      </div>
      <Image
        imageStyle="object-cover h-[240px] w-[400px] md:h-[320px] md:min-w-[467px] rounded-3xl shadow-xl"
        source={item.image}
        width={{ mobile: 400, tablet: 400, desktop: 600 }}
      />
  </div>
  {/each}
</section>
