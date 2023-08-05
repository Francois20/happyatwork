<script>
  import Image from "../components/Image.svelte";
  import PortableText from "$lib/portableText/PortableText.svelte";
  import Link from "$lib/components/Link.svelte";

  export let data;
  const {title, text, image, paragraphs, tag, reversed} = data;

</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding py-12 md:pt-24 md:pb-32 bg-light max-w-content">
  <div class="flex flex-col {reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}">
    <div class="w-full lg:w-1/2 {reversed ? 'lg:pl-16' : 'lg:pr-16'}">
      {#if tag}
        <span class="flex uppercase text-marine opacity-50 text-base lg:text-xl font-bold leading-5 lg:leading-6 mb-4">{tag}</span>
      {/if}
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-12 uppercase">{title}</h2>
      <PortableText data={text}/>
    </div>
    <div class="flex flex-1 lg:items-center mb-4 mt-8 lg:my-0 {reversed ? 'lg:justify-start' : 'lg:justify-end'}">
      <Image
        imageStyle="relative object-cover rounded-3xl shadow-xl h-[240px] md:h-[360px] w-full md:w-[540px]" 
        source={image}
        width={{ mobile: 300, tablet: 300, desktop: 800 }}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 mt-12 lg:mt-20">
    {#each paragraphs as paragraph, i}
      <div class="flex">
        {#if i !== 0 && i !== 3 && i !== 6}
          <div class="hidden lg:block border-r border-marine border-dashed w-1 min-w-[2px] max-w-[2px] h-14 mr-12" />
        {/if}
        <div class={i !== 2 && i !== 5 && i !== 8 && 'lg:mr-8'}>
          <h3 class="text-xl font-semibold">{paragraph.title}</h3>
          <div>
            <PortableText data={paragraph.text}/>
            {#if paragraph.link}
              <Link link={paragraph.link} />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

</section>