<script>
  import Image from "../components/Image.svelte";
  export let data;

</script>

<section class="relative grid grid-col-1 md:grid-cols-3 bg-marine gap-[8%] px-sm-padding md:px-md-padding xl:px-lg-padding pt-24 md:pt-40 lg:pt-44 pb-40 md:pb-32 mb-24 md:mb-40">
  {#each data.items as item}
    <div class="flex flex-col relative">
      <div class="flex flex-row md:flex-col items-center md:items-start mt-6 mb-4">
        <Image 
          imageStyle="w-[48px] md:w-[70px]"
          style="justify-start"
          source={item.image}
          width={{ mobile: 50, tablet: 100, desktop: 100 }}
        />
        <h3 class="font-bold w-16 text-xl md:text-2xl lg:text-3xl uppercase text-light md:mt-6 ml-4 md:ml-0">{item.title}</h3>
      </div>
      <p class="leading-7 text-light">{item.text}</p>
    </div>
  {/each}

  <div class="custom-shape-divider-top-1682626371">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
  </div>

  <div class="custom-shape-divider-top-1682627521">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
  </div>

  <div class="custom-shape-divider-top-1682627523">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
  </div>
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
