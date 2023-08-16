<script>
  import Image from "../components/Image.svelte";
  export let data;
  $: items = data.items

</script>

<section class="flex justify-center w-full py-20 lg:py-32 bg-marine my-12">
  <div class="max-w-content flex flex-col md:grid md:grid-cols-3 gap-12 lg:gap-[5%] px-sm-padding md:px-md-padding xl:px-lg-padding">
    {#each items as item}
      <div class="flex flex-col relative text-center">
        <div class="flex mb-4 lg:mb-8">
          <Image 
            imageStyle="w-[48px] md:w-[60px]"
            source={item.image}
            width={{ mobile: 50, tablet: 100, desktop: 100 }}
          />
          <h3 class="font-bold w-32 lg:w-56 text-xl md:text-2xl lg:text-3xl uppercase text-light text-left ml-4 lg:ml-8">{item.title}</h3>
        </div>
        <p class="leading-7 text-light text-left">{item.text}</p>
      </div>
    {/each}
  </div>
</section>
