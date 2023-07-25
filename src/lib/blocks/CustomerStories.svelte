<script>
  import Image from "$lib/components/Image.svelte";
  import Link from "$lib/components/Link.svelte";
  import PortableText from "$lib/portableText/PortableText.svelte";

  export let data;
  const {items} = data
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding w-full pt-20 pb-32 max-w-content">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
    {#each items as item, i}
    <div class="flex flex-col">
      <div class="relative flex flex-col lg:flex-row mb-8 lg:mb-12 items-center lg:items-start">
        <Image
          imageStyle="object-cover h-[360px] w-full md:h-[152px] md:w-[152px] shadow-xl rounded-xl"
          source={item.image}
          width={{ mobile: 400, tablet: 200, desktop: 240 }}
        />
        <div class="flex flex-col mt-8 lg:mt-0 h-full lg:ml-8 justify-end items-center lg:items-start text-center lg:text-left">
          <Image
            imageStyle="object-contain h-[60px] w-[100px] lg:h-[52px] lg:w-[80px] z-20"
            source={item.logo}
            width={{ mobile: 200, tablet: 200, desktop: 240 }}
          />
          <p class="text-2xl font-semibold">{item.name}</p>
          <p>{item.title}</p>
        </div>
      </div>
      <div class="flex flex-grow flex-col">
        <PortableText data={item.text}/>
        {#if item.link}
          <Link link={item.link} />
        {/if}
      </div>
    </div>
    {/each}
  </div>
</section>
