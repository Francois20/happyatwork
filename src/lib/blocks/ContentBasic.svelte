<script>
	import Button from "../components/Button.svelte";
  import Image from "../components/Image.svelte";
  import PortableText from "$lib/portableText/PortableText.svelte";

  export let data;
  const {heading, text, image, link, tag} = data;
</script>

<section class="flex flex-col-reverse lg:grid lg:grid-cols-2 px-sm-padding md:px-md-padding xl:px-lg-padding py-12 lg:py-24">
  <div class="mt-16 lg:mt-0 lg:pr-6">
    {#if tag}
      <span class="block text-marine opacity-50 text-base lg:text-xl font-bold w-min leading-5 lg:leading-6 mb-4">{tag}</span>
    {/if}
    <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold uppercase mb-4 lg:mb-12">{heading}</h2>
    <PortableText data={text}/>
    {#if link}
      <Button data={link} style="mt-12" />
    {/if}
  </div>
  <div class="flex h-full lg:items-center lg:justify-end">
    <Image
      imageStyle="relative object-cover rounded-xl shadow-xl h-[240px] md:h-[360px] w-full md:w-[540px] mt-16 lg:mt-0" 
      source={image}
      width={{ mobile: 500, tablet: 600, desktop: 600 }}
    />
  </div>
</section>