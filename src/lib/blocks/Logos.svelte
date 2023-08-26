<script>
  import Image from "../components/Image.svelte";

  export let data;

  $: text = data.text
  $: images = data.images
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding w-full max-w-content py-8">
    <div class="grid grid-cols-3 gap-y-8 gap-x-4 md:gap-0 md:flex md:justify-between lg:px-20">
      {#each images as image}
        <Image
          imageStyle="object-contain h-[40px] w-[80px] md:h-[50] md:w-[100px] xl:h-[50px] xl:w-[120px]"
          source={image}
          width={{ mobile: 180, tablet: 200, desktop: 240 }}
        />
      {/each}
    </div>
</section>
