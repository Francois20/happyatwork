<script>
  import Image from "../components/Image.svelte";
  export let data;

</script>

<section class="relative grid grid-col-1 md:grid-cols-3 gap-[5%] px-sm-padding md:px-md-padding xl:px-lg-padding py-12 lg:py-32 bg-marine my-12">
  {#each data.items as item}
    <div class="flex flex-col relative text-center">
      <div class="flex mt-6 mb-8">
        <Image 
          imageStyle="w-[48px] md:w-[60px]"
          source={item.image}
          width={{ mobile: 50, tablet: 100, desktop: 100 }}
        />
        <h3 class="font-bold w-56 text-xl md:text-2xl lg:text-3xl uppercase text-light text-left ml-8">{item.title}</h3>
      </div>
      <p class="leading-7 text-light text-left">{item.text}</p>
    </div>
  {/each}
</section>

<style>
  .custom-shape-divider-top-1682626371 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1682626371 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 56px;
}

.custom-shape-divider-top-1682626371 .shape-fill {
    fill: #FFFEFB;
}

/* bottom */
.custom-shape-divider-top-1682627521 {
    position: absolute;
    bottom: -56px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 5;
}

.custom-shape-divider-top-1682627521 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 56px;
}

.custom-shape-divider-top-1682627521 .shape-fill {
    fill: #003553;
}

/* blue */
.custom-shape-divider-top-1682627523 {
    position: absolute;
    bottom: -82px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1682627523 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 82px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1682627523 .shape-fill {
    fill: #4497D3;
}

</style>
