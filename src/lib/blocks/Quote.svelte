<script>
  import Image from "../components/Image.svelte";
  export let data;
  const {name, title, company, image, text } = data;
</script>

<section class="bg-marine px-sm-padding md:px-md-padding xl:px-lg-padding w-full">
  <div class="flex py-12 xl:px-20 lg:py-32">
    {#if image}
      <Image
          style="!items-start hidden md:block"
          imageStyle="relative object-cover rounded-full shadow-xl h-[60px] md:h-[112px] w-[60px] md:min-w-[112px]" 
          source={image}
          width={{ mobile: 200, tablet: 200, desktop: 200 }}
        />
    {/if}
    <div class="flex flex-col md:ml-8 text-light">
      <p class="uppercase font-semibold text-xl md:text-2xl xl:text-3xl mb-8"> "{text}"</p>
      <span class="font-semibold">{name}</span>
      <span>{title}</span>
      <span>{company}</span>
    </div>
  </div>
</section>
