<script>
  import Image from "../components/Image.svelte";

  export let data;
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding w-full ">
  <div class="py-16">
    <span class="flex text-marine opacity-50 text-base lg:text-xl font-bold leading-5 lg:leading-6 mb-8">{data.text}</span>
    <div class="grid grid-cols-3 gap-y-8 gap-x-4 md:gap-0 md:flex md:justify-between">
      {#each data.images as image}
        <Image
          imageStyle="object-contain h-[50px] w-[100px] xl:h-[70px] xl:w-[160px]"
          source={image}
          width={{ mobile: 200, tablet: 200, desktop: 300 }}
        />
      {/each}
    </div>
  </div>
</section>
