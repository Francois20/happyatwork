<script>
  import Image from "../components/Image.svelte";

  export let data;
</script>

<section class="px-sm-padding lg:px-lg-padding w-full py-16">
  <span class="block text-yellow text-base lg:text-xl font-bold w-min leading-5 lg:leading-6 mb-4">{data.text}</span>
  <div class="flex justify-between">
    {#each data.images as image}
      <Image
        imageStyle="object-contain h-[50px] w-[100px] md:h-[70px] md:w-[160px]"
        source={image}
        width={{ mobile: 200, tablet: 200, desktop: 300 }}
      />
    {/each}
  </div>
</section>
